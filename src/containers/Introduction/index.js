import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Switch, Route, Link } from "react-router-dom";
import CaseStudyList from "../CaseStudyList";
import { testAction, increaseAction } from '../../store/actionTypes/ets2020ActionType';
import { useDispatch, useSelector } from 'react-redux';
import { getNumber } from '../../store/selectors/projectSelectors';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A5997',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    width: 100,
    height: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
  },
  backgroundOverlay: {
    opacity: 0.5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  nitecoLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    marginTop: 60,
    width: 200
  },
  servicesLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain',
    width: 200,
    height: 80

  },
  // servicesContainer:{
  //   justifyContent:'space-between',
  //   flexDirection:'row',
  //   flex:1,
  //   marginTop:50,
  //   width: width *0.85
  // },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    width: 80,
    height: 80,
    left: 35
  },
  loginContainer: {
    backgroundColor: 'transparent',
    marginTop: 30
  },
  contentContainer: {
    alignItems: 'center'
  },
  plusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    bottom: 20, marginTop: 20,
    padding: 20
  },
  buttonText: {
    fontSize: 20,
    // fontFamily: 'Gill Sans',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#FFF',
    margin: 10,
    opacity: 0.8,
  },
  headlineText: {
    color: '#FFF',
    textAlign: 'center',
    // fontFamily: 'Open Sans',
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    marginTop:40,
  },
  detailText: {
    color: '#FFF',
    textAlign: 'center',
    // fontFamily: 'Open Sans',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: '300',
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 30
  },
  plusText: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
  },
  name: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
    alignSelf: 'center',
  },
});
