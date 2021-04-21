import { LOGIN, LOGOUT } from '../actions';

const initialState = false;

function auth (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            let newState = true;
            state = newState;
            return state;

        case LOGOUT:
            state = false;
            return state;

        default:
            return state;
    }
}

export default auth;