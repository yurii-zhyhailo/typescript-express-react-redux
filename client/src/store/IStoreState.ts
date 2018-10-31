import { IUserStoreState } from './user.state';
 
export default interface IStoreState {
    readonly user: IUserStoreState;
}
