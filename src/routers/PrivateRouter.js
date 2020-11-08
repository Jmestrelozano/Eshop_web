import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { SideBar } from "../components/SideBar";
import { CategoriesScreen } from "../views/CategoriesScreen";

export const PrivateRouter = ({
  isAuthenticated,
  component: Component,
  ...reset
}) => {
  return (
    <>
      <SideBar>
        <Route
          {...reset}
          component={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/auth/login" />
            )
          }
        />
        
       <Route  exact path="categoriaID/ID" component={CategoriesScreen} />
      </SideBar>
    </>
  );
};

PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
