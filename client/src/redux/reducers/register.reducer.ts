import { userConstants } from '../constants';
import { IRegisterState, IUserState } from '../states';

const initialRegistrationState = (): IRegisterState => {
let user = {
  firstName: 'me',
  lastName: 'me',
  username: 'me',
  password: 'hash'
} as IUserState;

return { 
  user: user,
  isRegistering: false
}
}; 

function register(state = initialRegistrationState(), action: any): IRegisterState {
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
