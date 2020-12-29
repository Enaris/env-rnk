import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import AuthReducer from './auth/auth.reducer';
import ArticleReducer from './article/article.reducer';

const RootReducer = history => combineReducers({
  router: connectRouter(history),
  auth: AuthReducer, 
  article: ArticleReducer
});

export default RootReducer;