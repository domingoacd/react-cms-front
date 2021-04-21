export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const IS_ADMIN = 'IS_ADMIN';

export function login () {
    const action = {
        type: LOGIN
    };

    return action;
}

export function logout () {
    const action = {
        type: LOGOUT
    };

    return action;
}

export function is_admin () {
    const action = {
        type: IS_ADMIN
    };

    return action;
}