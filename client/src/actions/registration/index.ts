import { Dispatch } from 'redux';

import { ActionTypeKeys } from "../ActionTypeKeys"
import {IRegisterFailAction,
    IRegisterInProgressAction,
    IRegisterSuccessAction} from './register.action';

import { IUser } from '../../models/interfaces';

import { userService } from '../../services';
import IStoreState from '../../store/IStoreState';


export function register(
    user: IUser
  ): (dispatch: Dispatch<any>) => Promise<void> {
    return async (dispatch: Dispatch<any>) => {
      // User registration in progress
      dispatch(registerInProgress());
  
      try {
        await userService.register(user);
  
        dispatch(registerSuccess(user));
      } catch (err) {
        dispatch(registerFail(err));
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

function registerFail(error: Error): IRegisterFailAction {
    return {
      payload: {
        error
      },
      type: ActionTypeKeys.REGISTER_FAIL
    };
}

export { IRegisterFailAction, IRegisterInProgressAction, IRegisterSuccessAction}