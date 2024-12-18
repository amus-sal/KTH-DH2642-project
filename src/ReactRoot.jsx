import { createHashRouter, RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SignupPresenter from "./presenters/signupPresenter";
import LoginPresenter from "./presenters/loginPresenter";
import HomePresenter from "./presenters/homePresenter";

export function makeRouter(models) {

  const { authModel, chatModel } = models;
  return createHashRouter([
    { path: "/",
    element: authModel.isAuthenticated ? <HomePresenter model={authModel} chatModel={chatModel} /> : <LoginPresenter model={authModel} /> 
    },
    {
      path: "/login",
      element: <LoginPresenter model={authModel} />,
    },
    {
      path: "/signup",
      element: <SignupPresenter model={authModel} />,
    },

  ]);
}

const ReactRoot = observer(function ReactRender(props) {
  return (
    <div>
      <RouterProvider router={makeRouter(props.models)} />
    </div>
  );
});

export { ReactRoot };
