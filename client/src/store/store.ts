import { createStore, applyMiddleware, Action } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import IStoreState from './IStoreState';

const loggerMiddleware = createLogger({
  level: "info"
});

export default function configureStore() {
    return createStore<IStoreState, Action<any>, {} , {}>(
      rootReducer,
      applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
  }
