import { Dispatch } from 'redux';

import { ActionTypeKeys } from "../ActionTypeKeys"
import {IRegisterFailureAction,
    IRegisterInProgressAction,
    IRegisterSuccessAction} from './register.action';

import { IUser } from '../../models/interfaces';

import { userService } from '../../services';
import IStoreState from '../../store/IStoreState';


export function registerUser (
    user: IUser
  ): (dispatch: Dispatch<any>) => Promise<void> {
    return async (dispatch: Dispatch<any>) => {
      // User registration in progress
      dispatch(registerInProgress());
  
      try {
        await userService.register(user);
  
        dispatch(registerSuccess(user));

      } catch (error) {
        dispatch(registerFailure(error));
      }
    };
}

function registerInProgress(): IRegisterInProgressAction {
    return {
      type: ActionTypeKeys.REGISTER_INPROGRESS
    };
}

function registerSuccess(user: IUser): IRegisterSuccessAction {
    return {
      payload: {
        user
      },
      type: ActionTypeKeys.REGISTER_SUCCESS
    };
}

function registerFailure(error: Error): IRegisterFailureAction {
    return {
      payload: {
        error
      },
      type: ActionTypeKeys.REGISTER_FAILURE
    };
}

export { IRegisterFailureAction, IRegisterInProgressAction, IRegisterSuccessAction}