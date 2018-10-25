import { IRegisterStoreState, registerInitialState } from '../store';

import {
  IRegisterFailAction,
  IRegisterInProgressAction,
  IRegisterSuccessAction } from '../actions/registration';
import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import ActionTypes from '../actions/ActionTypes';

export default function register(
  state: IRegisterStoreState = registerInitialState,
  action: ActionTypes
  ) {
  switch (action.type) {
    case ActionTypeKeys.REGISTER_FAIL:
      return onRegisterFail(action, state);
    case ActionTypeKeys.REGISTER_SUCCESS:
      return onRegisterSuccess(action, state);
    case ActionTypeKeys.REGISTER_INPROGRESS:
      return onRegisterInProgress(state);
    default:
      return state
  }
}

function onRegisterFail(
  action: IRegisterFailAction,
  currentState: IRegisterStoreState
) {
  return {
    ...currentState,
    isFetching: false
  }
}

function onRegisterSuccess(
  action: IRegisterSuccessAction,
  currentState: IRegisterStoreState
) {
  return {
    ...currentState,
    isFetching: false
  }
}

function onRegisterInProgress(currentState: IRegisterStoreState) {
  return {
    ...currentState,
    isFetching: true
  }
}
