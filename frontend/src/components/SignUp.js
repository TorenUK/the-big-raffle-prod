import React, { useState } from "react";

// components
import "./SignUp.css";

// other
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "./axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("/user/create", {
      email: email,
      password: password,
    });
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
          autoComplete="true"
          required
        />
        <div className="email error"></div>
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
        <div className="password error"></div>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
