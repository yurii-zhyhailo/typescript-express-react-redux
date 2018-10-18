export function authHeader(): {} {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Basic ' + user.token };
    } else {
        return {};
    }
}
