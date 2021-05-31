export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const IS_ADMIN = 'IS_ADMIN';

/* MENU */
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

/* OVERLAY */
export const SHOW_OVERLAY = 'SHOW_OVERLAY';
export const HIDE_OVERLAY = 'HIDE_OVERLAY';

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

export * from './menu';
export * from './overlay';
