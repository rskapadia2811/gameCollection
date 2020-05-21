import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
const ConfigStore = (rootReducer, rootSaga) => {
  /*--- Redux Configuration ---*/
  const middleware = [];
  const enhancers = [];

  /*--- Navigation Middleware ---*/

  /*--- Analytics Middleware ---*/

  /*--- Sagas Middleware ---*/
  const sagaMonitor = null;
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  middleware.push(sagaMiddleware);

  /*--- Assemble Middleware ---*/

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  /*--- Kick off root saga ---*/
  let sagasManager = sagaMiddleware.run(rootSaga);
  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default ConfigStore;
