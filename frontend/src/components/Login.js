import React, { useState } from "react";

// components
import "./Login.css";

// other
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // reset errors
    setEmailErr("");
    setPasswordErr("");

    try {
      const res = await fetch("https://tbr-prod.herokuapp.com/user/login", {
        method: "POST",
        withCredentials: true,
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      // update error divs
      if (data.errors) {
        setEmailErr(data.errors.email);
        setPasswordErr(data.errors.password);
        setProcessing(false);
      }
      if (data.user) {
        dispatch(login(email));
        history.push("/main");
      }
    } catch (err) {
      console.log(err);
    }
    {
    }
  };

  return (
    <div className="login">
      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="email"
          autoComplete="email"
          required
        />
        <div className="email error">{emailErr}</div>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
          placeholder="password"
          autoComplete="true"
          required
        />
        <div className="password error">{passwordErr}</div>
        <Button onClick={handleSubmit}>
          {processing ? "LOADING..." : "LOGIN"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
