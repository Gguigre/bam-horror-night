import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Step } from "./pages/Step";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
      <Route path="/step/:teamId/:stepId" exact component={Step} />
    </Router>
  );
}

export default AppRouter;
