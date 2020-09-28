import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Introduction from "./containers/Introduction";
import CaseStudyList from "./containers/CaseStudyList";
import EPIList from "./containers/EPIList";
import CaseStudyDetail from "./containers/CaseStudyDetail";
import Topics from "./containers/Topics";
// import Splash from "./containers/Splash";
import "./App.scss";
// import { useDispatch, useSelector } from 'react-redux';
// import { getRehydrated } from './store/selectors/projectSelectors';

const App = () => {
  // const dispatch = useDispatch();

  // const isRehydrated = useSelector(getRehydrated);

  // if (isRehydrated == false) {
  //   return (<Splash />);
  // }

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
                <Link to="/epi">
                  <b>EPI Server</b>
                </Link>
              </li>
              {/* <li>
                <Link to="/topics">
                  <b>Topics</b>
                </Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>
      <p>
        <Switch>
          <Route path={`/detail/:projectID`}>
            <CaseStudyDetail />
          </Route>
          <Route path="/projects">
            <CaseStudyList />
          </Route>
          <Route path="/epi">
            <EPIList />
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
