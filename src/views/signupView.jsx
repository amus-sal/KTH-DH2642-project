import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"
const SignupView = (props) => {
  function handleEmailCB(evt) {
    props.setEmail(evt.target.value); 
  }

  function handlePasswordCB(evt) {
    props.setPassword(evt.target.value); 
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={(e) => { e.preventDefault(); props.onSignup(); }} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={props.email || ""}
          onChange={(handleEmailCB)} 
          required
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={(handlePasswordCB)}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
      {props.error && <p className="error-message">{props.error}</p>}
      {props.successMessage && <p className="success-message">{props.successMessage}</p>}
      <p>
        Already have an account?{" "}
        <Link to="/login" className="signup-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupView;
