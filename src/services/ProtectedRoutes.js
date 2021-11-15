import React from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRouteIndex = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = sessionStorage.getItem("token");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
export const ProtectedRouteLogin = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = sessionStorage.getItem("token");
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/index" />
      }
    />
  );
}
