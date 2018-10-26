import { combineReducers, Reducer, AnyAction } from 'redux';

import authentication from './authentication.reducer';
import register from './register.reducer';

import IStoreState from '../store/IStoreState';
import { IRegisterStoreState, IUserStoreState } from '../store';

let rootReducer = combineReducers<any>({
    register: register as Reducer<IRegisterStoreState>,
    authentication: authentication as Reducer<IUserStoreState>
});

export default rootReducer;