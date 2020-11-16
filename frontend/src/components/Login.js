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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
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
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
};

export default Login;
