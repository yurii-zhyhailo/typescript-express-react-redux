import { IUser } from '../../models/interfaces';
import { ActionTypeKeys } from '../ActionTypeKeys';

export interface ILoginFailureAction {
    readonly type: ActionTypeKeys.LOGIN_FAILURE,
    readonly payload: {
        readonly error: Error
    }
}

export interface ILoginInProgressAction {
    readonly type: ActionTypeKeys.LOGIN_INPROGRESS
}

export interface ILoginSuccessAction {
    readonly type: ActionTypeKeys.LOGIN_SUCCESS
    readonly payload: {
        readonly user: IUser
    }
}
