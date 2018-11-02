import { IUser } from './interfaces';
import { IsEmail, IsNotEmpty, IsUrl, MaxLength } from "class-validator";
import strings from '../strings';

interface IUserViewModel extends IUser {}

export default class UserViewModel implements  IUserViewModel {
    public readonly id: string;

    @IsNotEmpty({
        message: strings.userViewModel.nameIsNotEmptyMessage
    })
    @MaxLength(100, {
        message: strings.userViewModel.nameMaxLengthMessage
    })
    public readonly firstName: string;
    
    @IsNotEmpty({
        message: strings.userViewModel.nameIsNotEmptyMessage
    })
    @MaxLength(100, {
        message: strings.userViewModel.nameMaxLengthMessage
    })
    public lastName: string;

    @IsNotEmpty({
        message: strings.userViewModel.userNameIsNotEmptyMessage
    })
    @IsEmail(undefined, {
        message: strings.userViewModel.userNameIsEmailMessage
    })
    @MaxLength(100, {
        message: strings.userViewModel.userNameMaxLengthMessage
    })
    public username: string;

    @IsNotEmpty({
        message: strings.userViewModel.passwordIsNotEmptyMessage
    })
    @MaxLength(100, {
        message: strings.userViewModel.passwordMaxLengthMessage
    })
    public password: string;

    @IsNotEmpty({
        message: strings.userViewModel.emailAddressIsNotEmptyMessage
    })
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
