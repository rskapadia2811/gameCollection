import {combineReducers} from 'redux';
import ConfigStore from './ConfigStore';
import rootSaga from '../Sagas';
import {ApplyPersist} from '../ReduxPersist/ReduxPersist';
import {persistStore} from 'redux-persist';

/*--- PRELOAD Redux Files---*/
const UtilityRedux = require('./UtilityRedux');
// const ToDoRedux = require('./ToDoRedux');
/*--- MIGRATIONS ---*/
const migrations = {
  0: (state) => {
    delete state.github;
    state.utility = Object.assign(UtilityRedux.INITIAL_STATES, state.utility);
  },
};
/*--- Reducers ---*/
export const reducers = combineReducers({
  utility: UtilityRedux.reducer,
});

export default () => {
  let finalReducers = ApplyPersist(reducers, migrations);
  const {store, sagasManager, sagaMiddleware} = ConfigStore(
    finalReducers,
    rootSaga,
  );

  const persistor = persistStore(store);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas);
      });
    });
  }

  return {store, persistor};
};
