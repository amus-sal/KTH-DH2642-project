import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";  
import LoginView from "../views/loginView";
import { useNavigate } from "react-router-dom";

const LoginPresenter = observer(({ model }) => {
  useEffect(() => {

    model.reset();
  }, [model]);
  function setEmailkCB(email) {
    return model.setEmail(email)
  }
  function setPasswordCB(password) {
    return model.setPassword(password)
  }
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await model.handleLogin();
      if (model.isAuthenticated) {
        navigate("/"); 
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };


  return (
    <LoginView
      email={model.email}
      password={model.password}
      error={model.error}
      successMessage={model.successMessage}
      setEmail={setEmailkCB}
      setPassword={setPasswordCB}
      onLogin={handleLogin}  
    />
  );
});

export default LoginPresenter;
