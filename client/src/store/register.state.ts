import { IUser } from '../models/interfaces';

export interface IRegisterStoreState {
    payload: {
       user: IUser
    },
    isFetching: boolean
}

export const registerInitialState: IRegisterStoreState = {
    payload: {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        } as IUser},
    isFetching: false
}
