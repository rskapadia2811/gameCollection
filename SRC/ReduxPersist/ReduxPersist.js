import immutablePersistenceTransform from './ImmutablePersistenceTransform';
import {AsyncStorage} from 'react-native';
import {createMigrate, persistReducer} from 'redux-persist';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ['utility'],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    // whitelist: [],
    transforms: [immutablePersistenceTransform],
  },
};

export const ApplyPersist = (reducers, migrations) => {
  let finalReducers = [];
  if (REDUX_PERSIST.active) {
    const persistConfig = REDUX_PERSIST.storeConfig;
    finalReducers = persistReducer(
      {
        ...persistConfig,
        migrate: createMigrate(migrations, {debug: false}),
      },
      reducers,
    );
  }
  return finalReducers;
};
export default REDUX_PERSIST;
