import React from "react";
import "./App.css";
import "./mystyles.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeRoutes } from "./Home/HomeRoutes";
import { Page404 } from "./404/404";
import { Login } from "./Login/Login";
import { PrivateRoute } from "./shared/PrivateRoute";
import { AuthProvider } from "./Login/AuthProvider";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/home" component={HomeRoutes} />
          <Route exact path="/login" component={Login} />
          <Redirect from="/" to="/login" />
          <Route component={Page404} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
