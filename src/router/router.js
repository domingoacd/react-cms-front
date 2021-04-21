import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserLogin from '../pages/UserLogin'; 
import AdminLogin from '../pages/AdminLogin'; 
import Dashboard from '../pages/Dashboard';
import Editor from '../pages/Editor';

const AppRouter = () => {
    return(
        <Router>
            <Route exact path="/" component={UserLogin}/> 
            <Route path="/admin-panel" component={AdminLogin}/> 
            <Route path="/dashboard" component={Dashboard}/> 
            <Route path="/editor" component={Editor}/> 
        </Router>
    );
};
export default AppRouter;