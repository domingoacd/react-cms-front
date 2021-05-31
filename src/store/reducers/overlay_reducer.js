import { SHOW_OVERLAY, HIDE_OVERLAY } from '../actions';

const initialState = false;

const  overlay_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_OVERLAY:
            return true;
        
        case HIDE_OVERLAY :
            return false;
 
        default:
            return state
    }
}

export default overlay_reducer;