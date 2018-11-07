import { IUserStoreState, userInitialState } from '../store';

import {  IRegisterSuccessAction,
          IRegisterFailureAction } from '../actions/register';
import { ActionTypeKeys } from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';

export default function register(
    state: IUserStoreState = userInitialState,
    action: ActionTypes
  ) {
      switch (action.type) {
        case ActionTypeKeys.REGISTER_FAILURE:
          return onRegisterFailure(action, state);
        case ActionTypeKeys.REGISTER_SUCCESS:
          return onRegisterSuccess(action, state);
        case ActionTypeKeys.REGISTER_INPROGRESS:
          return onRegisterInProgress(state);
        default:
          return state;
      }
}

function onRegisterInProgress(currentState: IUserStoreState) {
    return {
      ...currentState
    };
}

function onRegisterSuccess(
    action: IRegisterSuccessAction,
    currentState: IUserStoreState
) {
    return {
      ...currentState,
      user: action.payload.user
    };
}

function onRegisterFailure(
    action: IRegisterFailureAction,
    currentState: IUserStoreState
) {
    return {
      ...currentState,
      user: action.payload.error
    };
}
