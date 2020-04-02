import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./../components/Home";
import PageNotFound from "./../components/PageNotFound";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route exact render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
}