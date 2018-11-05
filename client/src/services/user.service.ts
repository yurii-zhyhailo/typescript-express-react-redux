import { authHeader } from '../helpers';
import { IUser } from '../models/interfaces';
import baseUrl from './baseUrl';

export const userService = {
    login,
    getAll,
    logout,
    register
}

function login(username: string, password: string): Promise<void> {
    const requestUrl = `${baseUrl}users/authenticate`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password })
    };

    return fetch('/users/authenticate', requestOptions)
        .then(handleResponse)
        .then((user: any) => {
            // login successful if if there`s s jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function getAll(): Promise<void> {
    const requestUrl = `${baseUrl}/users`;

    let requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions)
        .then(handleResponse);
}

function logout() {
    // remove a user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user: any): Promise<void> {
    const requestUrl = `${baseUrl}/users/register`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(stripProperties(user))
    };

    return fetch(`/users/register`, requestOptions).then(handleResponse);
}

function handleResponse(responce: any): void {
    return responce.text().then((text: string) => {
        let data = text && JSON.parse(text);

        return data;
    });
}

// Using this to remove any other properties that happen to be on object so only
// send ISite properties to server.
function stripProperties({ id, firstName, lastName, username, password, email}: IUser): IUser {
    return {
      id,
      firstName,
      lastName,
      username,
      password,
      email
    };
}
