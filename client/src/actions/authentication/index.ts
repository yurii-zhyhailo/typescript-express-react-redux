import { Dispatch } from 'redux';

import { ILoginInProgressAction,
         ILoginSuccessAction,
         ILoginFailureAction} from './authentification.action';

import { userService } from '../../services';
import { IUser } from '../../models/interfaces';
import { ActionTypeKeys } from '../../actions/ActionTypeKeys';

export function login(
    user: IUser
): (dispatch: Dispatch<any>) => Promise<void> {
    return async (dispatch: Dispatch<any>) => {
        dispatch(loginInProgress());

        try {
            await userService.login(user.username, user.password);

            dispatch(loginSuccess(user));
        } catch (err) {
            dispatch(loginFailure);
        }
    }
}

function loginInProgress(): ILoginInProgressAction {
    return {
        type: ActionTypeKeys.LOGIN_INPROGRESS
    }
}

function loginSuccess(user: IUser): ILoginSuccessAction {
    return {
        payload: {
            user
        },
        type: ActionTypeKeys.LOGIN_SUCCESS
    }
}

function loginFailure(error: Error): ILoginFailureAction {
    return {
        payload: {
            error
        },
        type: ActionTypeKeys.LOGIN_FAILURE
    }
}


export { ILoginFailureAction, ILoginInProgressAction, ILoginSuccessAction }
