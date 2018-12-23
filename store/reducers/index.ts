import { combineReducers } from 'redux';

import { app } from './app';
import { detail } from './detail';

export const rootReducer = combineReducers({
  app,
  detail
});
