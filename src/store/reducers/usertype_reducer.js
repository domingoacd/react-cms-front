import { IS_ADMIN } from '../actions';

const initialState = false;

function userType (state = initialState, action) {
    switch (action.type) {
        case IS_ADMIN:
            let newState = true;
            state = newState;
            return state;

        default:
            return state;
    }
}

export default userType;