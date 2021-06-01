import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import usertypeReducer from './usertype_reducer';
import menuReducer from './menu_reducer';
import overlayReducer from './overlay_reducer';
import loaderReducer from './loader_reducer';

const rootReducer = combineReducers({
    is_logged: authReducer,
    is_admin: usertypeReducer,
    show_sidebar: menuReducer,
    show_overlay: overlayReducer,
    show_loader: loaderReducer    
});

export default rootReducer;