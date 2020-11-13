import React from "react";

// components
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form>
        <input name="email" type="text" placeholder="email" required />
        <input name="password" type="text" placeholder="password" required />
      </form>
    </div>
  );
};

export default Login;
