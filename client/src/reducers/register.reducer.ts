import { IRegisterStoreState, registerInitialState } from '../store';

import { IRegisterSuccessAction } from '../actions/registration';
import { ActionTypeKeys } from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';

export default function register(
    state: IRegisterStoreState = registerInitialState,
    action: ActionTypes
  ) {
      switch (action.type) {
        case ActionTypeKeys.REGISTER_FAILURE:
          return onRegisterFailure(state);
        case ActionTypeKeys.REGISTER_SUCCESS:
          return onRegisterSuccess(action, state);
        case ActionTypeKeys.REGISTER_INPROGRESS:
          return onRegisterInProgress(state);
        default:
          return state;
      }
}

function onRegisterInProgress(currentState: IRegisterStoreState) {
    return {
      ...currentState,
      isFetching: true
    };
}

function onRegisterSuccess(
    action: IRegisterSuccessAction,
    currentState: IRegisterStoreState
) {
    return {
      ...currentState,
      user: action.payload.user,
      isFetching: false
    };
}

function onRegisterFailure(
    currentState: IRegisterStoreState
) {
    return {
      ...currentState,
      isFetching: false
    };
}
