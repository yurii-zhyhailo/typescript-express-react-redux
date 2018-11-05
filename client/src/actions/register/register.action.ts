import { IUser } from '../../models/interfaces';
import { ActionTypeKeys } from '../ActionTypeKeys';

export interface IRegisterFailureAction {
    readonly type: ActionTypeKeys.REGISTER_FAILURE;
    readonly payload: {
      readonly error: Error
    }
}

export interface IRegisterInProgressAction {
  readonly type: ActionTypeKeys.REGISTER_INPROGRESS
}

export interface IRegisterSuccessAction {
  readonly type: ActionTypeKeys.REGISTER_SUCCESS;
  readonly payload: {
    readonly user: IUser
  }
}
