import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as reducers from './modules';
import logger from 'redux-logger';
import { offline } from "redux-offline";
import offlineConfig from 'redux-offline/lib/defaults';
import * as localforage from "localforage";
import axios from 'axios';

offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

// overriding effect
const customConfig = {
  ...offlineConfig,
  effect: (effect, action) => {
    return axios.post(effect.url, action.payload && action.payload.content);
  }
};

const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer, 
  compose(applyMiddleware(logger), offline(customConfig))
);

export default store;
