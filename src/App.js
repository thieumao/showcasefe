import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Introduction from "./containers/Introduction";
import CaseStudyList from "./containers/CaseStudyList";
import Topics from "./containers/Topics";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div id="menu">
        <ul>
          <li>
            <Link to="/">
              <b>Introduction</b>
            </Link>
          </li>
          <li>
            <b>Projects</b>
            <ul class="sub-menu">
              <li>
              <Link to="/projects">
              <b>All</b>
            </Link>
              </li>
              <li>
              <Link to="/topics">
              <b>EPI Server</b>
            </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p>
        <Switch>
          <Route path="/projects">
            <CaseStudyList />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Introduction />
          </Route>
        </Switch>
      </p>
    </Router>
  );
};

export default App;
