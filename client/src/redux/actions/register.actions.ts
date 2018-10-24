import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { history } from '../../helpers';

import { userConstants } from '../constants';
import { userService } from '../../services';
import { IUserState, IState } from "../states";



function register(user: any): any {

  const request = () => ({
    type: userConstants.REGISTER_FAILURE,
    isRegistering: true
  });
  
  const failure = () => ({
    type: userConstants.REGISTER_FAILURE,
    isRegistering: false
  });
  
  const success = (user: IUserState) => ({
    type: userConstants.REGISTER_SUCCESS,
    user: user,
    isRegistering: false
  });

  return (dispatch: any) => {
      dispatch(request());

      userService.register(user)
          .then(
              (user: any) => { 
                  dispatch(success(user));
                  history.push('/login');
              },
              error => {
                  dispatch(failure());
              }
          );
  };
}
