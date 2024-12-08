import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"

const LoginView = (props) => {
  function handleEmailCB(evt) {
    props.setEmail(evt.target.value); 

  }

  function handlePasswordCB(evt) {
    props.setPassword(evt.target.value); 
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Welcome Back</h2>
        {props.successMessage && (
          <p className="success-message">{props.successMessage}</p>
        )}
        {props.error && <p className="error-message">{props.error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onLogin();
          }}
          className="login-form"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={props.email || ""}
            onChange={handleEmailCB}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={props.password || ""}
            onChange={handlePasswordCB}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="redirect-text">
          Don't have an account?{" "}
          <Link to="/signup" className="login-link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
