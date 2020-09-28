import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Switch, Route, Link } from "react-router-dom";
import CaseStudyList from "../CaseStudyList";
import { testAction, increaseAction } from '../../store/actionTypes/ets2020ActionType';
import { useDispatch, useSelector } from 'react-redux';
import { getNumber } from '../../store/selectors/projectSelectors';

const Introduction = () => {
  const dispatch = useDispatch();

  const valueNumber = useSelector(getNumber);

  useEffect(() => {
    console.log("Introduction");
    dispatch(testAction('name', 'Thieu Mao'));
    dispatch(increaseAction('number', valueNumber));
  }, []);

  return (
    <p id="container">
      <h1 className="title">Introduction</h1>
      <h3>Transforming Digital into Business Solutions</h3>
      <h3>
        We merge technical depth and business strategy to tailor-make digital
        products that turn innovation into your growth and profit.
      </h3>
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
