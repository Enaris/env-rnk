import { call, all } from 'redux-saga/effects';
import AuthSagas from './auth/auth.sagas';
import ArticleSagas from './article/article.sagas';

export default function* RootSagas() {
  yield all([
    call(AuthSagas), 
    call(ArticleSagas)
  ])
}