export interface IUserDTO {
    id: string;
    first_name: string;
    last_name: string;
}

export interface IUser {
    readonly id: string;
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly password: string,
    readonly email: string
}
