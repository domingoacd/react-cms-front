import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import usertypeReducer from './usertype_reducer';

const rootReducer = combineReducers({
    is_logged: authReducer,
    is_admin: usertypeReducer
});

export default rootReducer;