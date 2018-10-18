import { userConstants } from '../constants';
import { userService } from '../../services';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};


function login(username: string, password: string): any {
    return (dispatch: any) => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                (user: any) => {
                    dispatch(success(user));
                },
                (error: any) => {
                    dispatch(failure(error));
                }
            );
    }

    function request(user: any): {}  { return { type: userConstants.LOGIN_REQUEST, user} }
    function success(user: any): {} { return { type: userConstants.LOGIN_SUCCESS, user} }
    function failure(error: any): {} { return { type: userConstants.LOGIN_FAILURE, error} }
}

function logout(): {} {
    return { type : userConstants.LOGOUT };
}

function register(): void {
    throw new Error('NotImplementedException');
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



