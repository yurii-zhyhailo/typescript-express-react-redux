import { IUser } from '../../models/interfaces';

export interface IRegisterState {
    payload: {
       user: IUser
    },
    isRegistering: boolean
}

export const registerInitialState: IRegisterState = {
    payload: {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        } as IUser},
    isRegistering: false
}
