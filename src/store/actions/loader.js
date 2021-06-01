import { SHOW_LOADER, HIDE_LOADER } from '../actions';

export function showLoader () {
    const action = {
        type: SHOW_LOADER
    }
    return action
}

export function  hideLoader () {
    const action = {
        type: HIDE_LOADER
    }
    return action;
}