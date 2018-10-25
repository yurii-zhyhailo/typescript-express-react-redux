import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import IStoreState from './IStoreState';


export default function configureStore() {
    return createStore<IStoreState>(
      rootReducer,
      applyMiddleware(thunkMiddleware, createLogger())
    );
  }
