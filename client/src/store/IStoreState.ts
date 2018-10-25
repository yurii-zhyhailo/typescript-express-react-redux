import { IUserStoreState } from './user.state';
import { IRegisterStoreState } from './register.state';
 
export default interface IStoreState {
    readonly user: IUserStoreState,
    readonly register: IRegisterStoreState
}
