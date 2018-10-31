import { IUser } from './interfaces';

interface IUserViewModel extends IUser {}

export default class UserViewModel implements  IUserViewModel {
    public readonly id: string; 
    public firstName: string;
    public lastName: string;
    public username: string;
    public password: string;
    public email: string;

    constructor(
        user: IUserViewModel = {
            id: '',
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: ''
        }
    ) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.username = user.username;
        this.password = user.password;
        this.email = user.email;
    }
}
