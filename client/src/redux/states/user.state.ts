import { IUser } from '../../models/interfaces';

export interface IUserState extends IUser {
    username: string,
    password: string
}
