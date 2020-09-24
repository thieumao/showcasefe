import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import * as reducers from './modules';
import rootSaga from './sagas';
// import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  // storage: AsyncStorage,
  blacklist: ['appState', 'message', 'contact'],
};

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();
// let middleware = [];
// middleware = [sagaMiddleware, logger];

// const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middleware));
// sagaMiddleware.run(rootSaga);
// const store = createStore(persistReducer(persistConfig, rootReducer));

// export const persistor = persistStore(store);


const store = createStore(rootReducer);
export default store;
