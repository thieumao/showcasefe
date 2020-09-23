import React from "react";
import "./styles.scss";
import { Switch, Route, Link } from "react-router-dom";
import CaseStudyList from "../CaseStudyList";

const Introduction = () => {
  return (
    <p id="container">
      <h1 className="title">Introduction</h1>
      <p>Transforming Digital into Business Solutions</p>
      <p>
        We merge technical depth and business strategy to tailor-make digital
        products that turn innovation into your growth and profit.
      </p>
      <p className="see-more">
        <Link to="/projects">
          <b>TAP TO SEE OUR WORK</b>
        </Link>
      </p>
      <p>
        <Switch>
          <Route path="/projects">
            <CaseStudyList />
          </Route>
        </Switch>
      </p>
    </p>
  );
};

export default Introduction;
