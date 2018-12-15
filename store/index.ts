import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares] as any[];
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
