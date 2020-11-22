import { applyMiddleware, createStore, Middleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { UserState } from './user/types';
import reducers from './reducers';
import sagas from './sagas';

export interface ApplicationState {
  user: UserState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware<object>[] = [sagaMiddleware, createLogger()];

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

sagaMiddleware.run(sagas);

// Exports
export { store, persistor };
