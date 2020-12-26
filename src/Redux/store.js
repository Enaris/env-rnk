import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import RootReducer from './root-reducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import RootSagas from './root-saga';

export const history = createBrowserHistory();

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ logger, sagaMiddleware, routerMiddleware(history) ];

const store = createStore(
  RootReducer(history),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(RootSagas);

export default store;