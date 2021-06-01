import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ROUTES from '../constants/routes';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userIsLogged = useSelector((state) => state.is_logged);

  return (
    <Route
      {...rest}
      render={(props) => {
          if (userIsLogged) {
            return  <Component {...rest} {...props} />;
          } else {
            return <Redirect to={ROUTES.UNAUTHORIZED} />
          }
      }}
    />
  );
};

export default ProtectedRoute;
