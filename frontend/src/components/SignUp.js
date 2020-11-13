import React from "react";

// components
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp">
      <form>
        <input name="email" type="text" placeholder="email" required />
        <input name="password" type="text" placeholder="password" required />
      </form>
    </div>
  );
};

export default SignUp;
