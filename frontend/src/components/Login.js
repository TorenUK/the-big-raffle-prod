import React, { useState } from "react";

// components
import "./Login.css";

// other
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset errors
    setEmailErr("");
    setPasswordErr("");

    try {
      const res = await fetch("http://localhost:4242/user/login", {
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
    <div className="login">
      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="email"
          autoComplete="true"
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
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
