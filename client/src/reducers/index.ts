import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import register from './register.reducer';
import IStoreState from '../store/IStoreState'

let rootReducer = combineReducers<IStoreState>({
    register
});

export default rootReducer;