import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { register } from './register.reducer';

let rootReducer = combineReducers({
    authentication,
    register
});

export default rootReducer;