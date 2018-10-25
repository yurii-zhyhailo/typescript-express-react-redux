import { userConstants } from '../constants';
import { IRegisterState, registerInitialState, IUserState } from '../states';

function register(state = registerInitialState, action: any): IRegisterState {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        isRegistering: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false 
      };
    default:
      return state
  }
}

export { register }
