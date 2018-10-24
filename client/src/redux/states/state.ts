import { IUserState } from './user.state';
import { IRegisterState } from './register.state';
 
export interface IState {
    user: IUserState,
    register: IRegisterState
}
