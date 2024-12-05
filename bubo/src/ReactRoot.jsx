import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SignupPresenter from "./presenters/signupPresenter";
import LoginPresenter from "./presenters/loginPresenter";
import HomePresenter from "./presenters/homePresenter";

export function makeRouter(model) {
  return createHashRouter([
    { path: "/",
    element: model.isAuthenticated ? <HomePresenter model={model} /> : <LoginPresenter model={model} /> 
    },
    {
      path: "/login",
      element: <LoginPresenter model={model} />,
    },
    {
      path: "/signup",
      element: <SignupPresenter model={model} />,
    },
  ]);
}

const ReactRoot = observer(function ReactRender(props) {
  return (
    <div>
      <RouterProvider router={makeRouter(props.model)} />
    </div>
  );
});

export { ReactRoot };
