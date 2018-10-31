import { combineReducers, Reducer, AnyAction } from 'redux';

import authentication from './authentication.reducer';
import register from './register.reducer';

import IStoreState from '../store/IStoreState';
import { IUserStoreState } from '../store';

const rootReducer = combineReducers<any>({
    register: register,
    authentication: authentication
});

export default rootReducer;
