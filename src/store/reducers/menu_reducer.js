import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../actions';

const initialState = true;

const  menu_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return true;
        
        case HIDE_SIDEBAR :
            return false;
 
        default:
            return state
    }
}

export default menu_reducer;