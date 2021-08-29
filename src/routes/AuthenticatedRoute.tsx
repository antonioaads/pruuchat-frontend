import React from "react";
import { Redirect, Route } from "react-router";
import { useUser } from "../providers/UserProvider";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { token } = useUser();

  return (
    <Route>
      render=
      {() => (token ? <Component {...rest} /> : <Redirect to="/login" />)}
    </Route>
  );
};

export default AuthenticatedRoute;
