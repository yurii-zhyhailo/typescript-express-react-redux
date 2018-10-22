import { IUserState } from './user.state';

export interface IRegistationState {
    user: IUserState,
    isRegistering: boolean
}
