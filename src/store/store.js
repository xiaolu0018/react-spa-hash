import {createStore, combineReducers,compose,applyMiddleware } from 'redux';
import user from './user/redurce.js';
import prov from './prov/redurce.js';
import menu from './menu/redurce.js';
// import {createLogger} from 'redux-logger';

// const logger = createLogger();
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  // applyMiddleware(logger),
  applyMiddleware()
);

let store = createStore(combineReducers({user, prov,menu}),enhancer);

export default store;