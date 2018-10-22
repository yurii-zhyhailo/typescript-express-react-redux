import { userConstants } from '../constants';
import { IRegistationState } from '../states';

const initialRegistrationState = (): IRegistationState => ({
  user: undefined,
  isRegistering: false
}); 

export function registration(state = initialRegistrationState(), action: any): IRegistationState {
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
