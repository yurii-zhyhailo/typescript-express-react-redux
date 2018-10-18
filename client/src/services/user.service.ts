import { authHeader } from '../helpers';

export const userService = {
    login,
    getAll,
    logout
}

function login(username: string, password: string) {
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

function getAll() {
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

function handleResponse(responce: any): void {
    return responce.text().then((text: string) => {
        let data = text && JSON.parse(text);

        return data;
    });
}