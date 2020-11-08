import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types"

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...reset
}) => {
  return (
    <Route
      {...reset}
      component={(props) => (
        isAuthenticated===false ? <Component {...props} /> :  <Redirect to="/Panel"/>
      )}
    />
  );
};

PublicRoute.propTypes ={
isAuthenticated : PropTypes.bool.isRequired,
component:PropTypes.func.isRequired
}
