import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Results from "./Components/Results/Results";
import Hotel from "./Components/Hotel/Hotel";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/city=:city/rooms=:rooms" component={Results} />
      <Route exact path="/hotel/:id" component={Hotel} />
    </Switch>
  );
};

export default Routes;
