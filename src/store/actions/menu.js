import { SHOW_SIDEBAR, HIDE_SIDEBAR, showOverlay, hideOverlay } from "../actions";

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

export function showSidebarAndOverlay () {

    return (dispatch) => {
       dispatch(showSidebar()); 
       dispatch(showOverlay());
    } 
}

export function hideSidebarAndOverlay () {

    return (dispatch) => {
       dispatch(hideSidebar()); 
       dispatch(hideOverlay());
    } 
}