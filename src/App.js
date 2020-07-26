import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Componemts/Landing/landing";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" render={() => <h1>Resume</h1>} />
        <Route path="/portfolio" render={() => <h1>Portfolio</h1>} />
        <Route to="/about" render={() => <h1>About</h1>} />
        <Route to="/contact" render={() => <h1>Contact</h1>} />
      </Switch>
    </Router>
  );
}
