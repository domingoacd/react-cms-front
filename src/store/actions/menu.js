import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../actions";

export function showSidebar () {
    const action = {
        type: SHOW_SIDEBAR
    }
    return action;
}

export function hideSidebar () {
    const action = {
        type: HIDE_SIDEBAR
    }

    return action;
}
