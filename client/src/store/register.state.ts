import { IUser } from '../models/interfaces';

export interface IRegisterStoreState {
    user: IUser
    isFetching: boolean
}

export const registerInitialState: IRegisterStoreState = {
    user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    } as IUser,
    isFetching: false
}
