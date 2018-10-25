import { IUserState } from './user.state';
import { IRegisterState } from './register.state';
 
export interface IState {
    readonly user: IUserState,
    readonly register: IRegisterState
}
