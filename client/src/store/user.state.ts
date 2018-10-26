import { IUser } from '../models/interfaces';

export interface IUserStoreState extends IUser {
    username: string,
    password: string
}

export const userInitialState: IUserStoreState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
}
