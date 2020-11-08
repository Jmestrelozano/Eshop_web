import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { CategoriesScreen } from "../views/CategoriesScreen";
import PanelScreen from "../views/PanelScreen";

export const SecondRouter = () => {
  return (
    <div className="wrapper">
      <SideBar>
        <Switch>
          <Route exact path="/Panel" component={PanelScreen} />
          <Route path="/Panel/categoryID/:Id" component={CategoriesScreen} />
         
      
        </Switch>
        <Redirect to="/Panel" />
      </SideBar>
    </div>
  );
};
