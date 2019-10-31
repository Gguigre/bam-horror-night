import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Step } from "./pages/Step";
import { LastStep } from "./pages/LastStep";
import { Cheat } from "./pages/Cheat";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
      <Route path="/step/:teamId/:stepId" exact component={Step} />
      <Route
        path="/laststep-didyoutrytoforgeurl/:teamId/"
        exact
        component={LastStep}
      />
      <Route path="/cheat" exact component={Cheat} />
    </Router>
  );
}

export default AppRouter;
