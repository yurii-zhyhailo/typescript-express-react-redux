import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';

let rootReducer = combineReducers({
    authentication
});

export default rootReducer;