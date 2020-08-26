import React from "react";
import { Menu } from "./Menu";
import { Switch, Redirect } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { Accounts } from "./Accounts/Accounts";
import { Stock } from "./Stock/Stock";
import { Profile } from "./Profile/Profile";
import { Sales } from "./Sales/Sales";
import { transactions } from "./Transactions/transactions";
import { PrivateRoute } from "../shared/PrivateRoute";

export const HomeRoutes = () => {
  return (
    <section className="section is-large">
      <div className="columns is-vcentered is-mobile">
        <div className="column is-narrow">
          <div className="menu-wrapper">
            <Menu />
          </div>
        </div>
        <div className="column">
          <Switch>
            <PrivateRoute exact path="/home/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/home/accounts" component={Accounts} />
            <PrivateRoute exact path="/home/stock" component={Stock} />
            <PrivateRoute exact path="/home/sales" component={Sales} />
            <PrivateRoute
              exact
              path="/home/transactions"
              component={transactions}
            />
            <PrivateRoute exact path="/home/profile" component={Profile} />
            <Redirect from="/home" to="/home/dashboard" />
          </Switch>
        </div>
      </div>
    </section>
  );
};
