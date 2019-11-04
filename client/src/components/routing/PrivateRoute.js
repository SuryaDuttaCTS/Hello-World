import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  console.log({ isAuthenticated, loading });
  return (
    <Route
      {...rest}
      render={props =>
        !loading &&
        (!isAuthenticated ||
          isAuthenticated === null ||
          isAuthenticated === "" ||
          isAuthenticated.length === 0) ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
