import { IUserState } from './user.state';
import { IRegistationState } from './registration.state';
 
export interface IState {
    user: IUserState,
    registration: IRegistationState
}
