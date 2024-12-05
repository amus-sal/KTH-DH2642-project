import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";  
import SignupView from "../views/signupView";


const SignupPresenter = observer(({ model }) => {
  useEffect(() => {
    model.reset();
  }, [model]);

  function setEmailCB(email) {
    return model.setEmail(email)
  }
  function setPasswordCB(password) {
    return model.setPassword(password)
  }
  function handleSignupACB(){
    return model.handleSignup()
  }
  return (
    <SignupView
      email={model.email}
      password={model.password}
      error={model.error}
      successMessage={model.successMessage}
      setEmail={setEmailCB}  
      setPassword={setPasswordCB}  
      onSignup={handleSignupACB}  
    />
  );
});

export default SignupPresenter;
