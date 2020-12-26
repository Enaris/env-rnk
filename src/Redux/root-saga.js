import { call, all } from 'redux-saga/effects';
import AuthSagas from './auth/auth.sagas';


export default function* RootSagas() {
  yield all([
    call(AuthSagas)
  ])
}