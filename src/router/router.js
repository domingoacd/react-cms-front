import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from '../pages/Index'; 
import UserLogin from '../pages/UserLogin'; 
import AdminLogin from '../pages/AdminLogin'; 
import Dashboard from '../pages/Dashboard';
import Editor from '../pages/Editor';
import ROUTES from '../constants/routes';

const AppRouter = () => {
    return(
        <Router>
            <Route exact path={ROUTES.ROOT} component={Index}/> 
            <Route path={ROUTES.ADMIN_PANEL} component={AdminLogin}/> 
            <Route path={ROUTES.DASHBOARD} component={Dashboard}/> 
            <Route path={ROUTES.EDITOR} component={Editor}/> 
        </Router>
    );
};
export default AppRouter;