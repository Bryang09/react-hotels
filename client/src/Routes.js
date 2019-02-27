import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Results from "./Components/Results/Results";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/city=:city/rooms=:rooms" component={Results} />
    </Switch>
  );
};

export default Routes;
