import { createStore, combineReducers } from 'redux';
import * as reducers from './modules';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default store;
