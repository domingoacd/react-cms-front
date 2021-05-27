import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import usertypeReducer from './usertype_reducer';
import menuReducer from './auth_reducer';

const rootReducer = combineReducers({
    is_logged: authReducer,
    is_admin: usertypeReducer,
    show_sidebar: menuReducer 
});

export default rootReducer;