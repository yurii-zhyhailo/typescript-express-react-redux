import { Dispatch } from 'redux';
import { IState } from '../../states';

import { ActionTypeKeys } from "../ActionTypeKeys"
import {IRegisterFailAction,
    IRegisterInProgressAction,
    IRegisterSuccess} from './register.action';

import { IUserState } from '../../states';

import { userService } from '../../../services';


export function register(
    user: IUserState
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

function registerSuccess(user: IUserState): IRegisterSuccess {
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
