import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import AuthReducer from './auth/auth.reducer';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer
});

export default RootReducer;