import { SHOW_LOADER, HIDE_LOADER } from '../actions';

const initialState = false;

function loader_reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER:
            return true;
        
        case HIDE_LOADER:
            return false;
    
        default:
            return state
    }
}

export default loader_reducer;