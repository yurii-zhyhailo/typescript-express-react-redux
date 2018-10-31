import { IUser } from '../models/interfaces';

export interface IUserStoreState extends IUser {}

export const userInitialState: IUserStoreState = {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
}
