import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./page/SignIn/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
