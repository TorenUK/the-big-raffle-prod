import React, { useState } from "react";

// components
import "./SignUp.css";

// other
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      }
      if (data.user) {
        history.push("/main");
      }
    } catch (err) {
      console.log(err);
    }
    {
    }
  };

  return (
    <div className="signUp">
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
        <Button onClick={handleSubmit}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
