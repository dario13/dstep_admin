import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../Login/AuthContext";

/*
type PrivateRouteProps<RouteProps>= {
  isAuthenticated: boolean;
}*/

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { currentUser } = React.useContext(AuthContext);

  return currentUser ? <Route {...props} /> : <Redirect to="/" />;
};
