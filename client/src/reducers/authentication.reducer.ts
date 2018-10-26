// import { userConstants } from '../constants';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggedIn: true, user } : {};

// function authentication(state = initialState, action: any): object {
//     switch (action.type) {
//         case userConstants.LOGIN_REQUEST:
//             return {
//                 loggedIn: true,
//                 user: action.user
//             };
//         case userConstants.LOGIN_SUCCESS:
//             return {
//                 loggedIn: true,
//                 user: action.user
//             };
//         case userConstants.LOGIN_FAILURE:
//             return {};
//         case userConstants.LOGOUT:
//             return {};
//         default:
//             return state
//     }
// }

import { IUserStoreState, userInitialState } from '../store';

import { ILoginSuccessAction } from '../actions/authentication';
import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import ActionTypes from '../actions/ActionTypes';

export default function authentication(
    state: IUserStoreState = userInitialState,
    action: ActionTypes
    ) {
        switch (action.type) {
            case ActionTypeKeys.LOGIN_FAILURE:
                return onLoginFailure(state);
            case ActionTypeKeys.LOGIN_SUCCESS:
                return onLoginSuccess(action, state);
            case ActionTypeKeys.LOGIN_INPROGRESS:
                return onLoginInProgress(state);
            default:
                state
        }
}

function onLoginInProgress(
    currentState: IUserStoreState
) {
    return {
        ...currentState
    }
}

function onLoginSuccess(
    action: ILoginSuccessAction,
    state:  IUserStoreState
) {
    return {

    }
}

function onLoginFailure(
    currentState: IUserStoreState
) {
    return {
        ...currentState
    }
}



