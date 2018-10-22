import { userConstants } from '../constants';
import { userService } from '../../services';
import { IUserState } from '../states';
import { history } from '../../helpers';
import { Dispatch, Action } from 'redux';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(user: IUserState): any {
    return (dispatch: Dispatch) => {
        dispatch(request( user ));

        userService.login(user.username, user.password)
            .then(
                (user: any) => {
                    dispatch(success(user));
                },
                (error: any) => {
                    dispatch(failure(error));
                }
            );
    }

    function request(user: IUserState): any  { return { type: userConstants.LOGIN_REQUEST, user} }
    function success(user: any): any { return { type: userConstants.LOGIN_SUCCESS, user} }
    function failure(error: any): any { return { type: userConstants.LOGIN_FAILURE, error} }
}

function logout(): {} {
    return { type : userConstants.LOGOUT };
}

function register(user: any): any {
    return (dispatch: any) => {
        dispatch(request(user));

        userService.register(user)
            .then(
                (user: any) => { 
                    dispatch(success(user));
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user: any) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user: any) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error: any) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll(): any {
    return (dispatch: any) => {
        dispatch(request());
        // dispatch(success(user));

        userService.getAll().
            then(
                (user: any) => {
                    dispatch(success(user));
                },
                (error: any) => {
                    dispatch(failure(error));
                }
            )
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users: any) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error: any) { return { type: userConstants.GETALL_FAILURE, error } }
}

function _delete(): void {
    throw new Error('NotImplementedException');
}



