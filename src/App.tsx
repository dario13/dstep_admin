import React from "react";
import "./App.css";
import "./mystyles.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Page404 } from "./404/404";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
