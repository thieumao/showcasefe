import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './modules';
import logger from 'redux-logger'

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
