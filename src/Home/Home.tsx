import React from "react";
import { Menu } from "./Menu";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { Accounts } from "./Accounts/Accounts";
import { Stock } from "./Stock/Stock";
import { Profile } from "./Profile/Profile";
import { Sales } from "./Sales/Sales";
import { transactions } from "./Transactions/transactions";

export const Home = () => {
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
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/accounts" component={Accounts} />
            <Route exact path="/stock" component={Stock} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/transactions" component={transactions} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="/" to="dashboard" />
          </Switch>
        </div>
      </div>
    </section>
  );
};
