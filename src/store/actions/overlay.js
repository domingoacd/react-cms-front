import { SHOW_OVERLAY, HIDE_OVERLAY } from "../actions";

export function showOverlay () {
    const action = {
        type: SHOW_OVERLAY
    }
    return action;
}

export function hideOverlay () {
    const action = {
        type: HIDE_OVERLAY
    }

    return action;
}
