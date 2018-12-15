import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";

import { rootReducer } from './reducers/index';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true
});
let middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger] as any[];
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
