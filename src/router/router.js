import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Index from "../pages/Index";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import Bookmarks from "../pages/Bookmarks";
import Editor from "../pages/Editor";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import ROUTES from "../constants/routes";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path={ROUTES.ROOT} component={Index} />
      <Route path={ROUTES.UNAUTHORIZED} component={Unauthorized} />
      <Route path={ROUTES.ADMIN_PANEL} component={AdminLogin} />
      <ProtectedRoute path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route path={ROUTES.EDITOR} component={Editor} />
      <Route path={ROUTES.EXPLORE} component={Explore} />
      <Route path={ROUTES.BOOKMARKS} component={Bookmarks} />
      <Route component={NotFound} />
    </Router>
  );
};
export default AppRouter;
