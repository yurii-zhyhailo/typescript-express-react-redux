import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";

import { userConstants } from '../constants';
import { userService } from '../../services';
import { IUserState, IState } from "../states";

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

export const register: ActionCreator<
  ThunkAction<Promise<void>, IState, void, any>
> = () => {
  return async (dispatch, getState) => {
    dispatch(request());
    try {
            userService.register(getState().user)
            .then(
                (response: any) => {
                    dispatch(success(response.data));
                },
                (response: any) => {
                    dispatch(failure());
                }
            );
     
    } catch (e) {
      console.log(e);
    }
  };
};
