import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../page/SignIn";

import Dashboard from "../page/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      {/* Rotas Privadas */}
      <Route path="/dashboard" component={Dashboard} isPrivate />

      {/* 404 */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
