import { IUserState } from './user.state';
import { IUser } from '../../models/interfaces';

export interface IRegistationState {
    user: IUser,
    isRegistering: boolean
}
