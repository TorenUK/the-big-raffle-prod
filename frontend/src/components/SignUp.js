import React, { useState } from "react";

// components
import "./SignUp.css";

// other
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/user/userSlice";

const SignUp = () => {
  const user = useSelector(selectUser);

  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // reset errors
    setEmailErr("");
    setPasswordErr("");

    try {
      const res = await fetch("https://tbr-prod.herokuapp.com/user/create", {
        method: "POST",
        withCredentials: true,
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      // update error div
      if (data.errors) {
        setEmailErr(data.errors.email);
        setPasswordErr(data.errors.password);
        setProcessing(false);
      }
      if (data.user) {
        setTimeout(() => {
          dispatch(login(email));
          history.push("/main");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
    {
    }
  };

  return (
    <div className="signUp">
      <h2>create an account</h2>
      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="email"
          required
        />
        <div className="signUp__error">{emailErr}</div>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="password"
          required
        />
        <div className="signUp__error">{passwordErr}</div>
        <Button onClick={handleSubmit}>
          {processing ? "processing..." : "SIGN UP"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
