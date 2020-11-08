import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { infoSearch, login } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { firebase } from "../firebase/firebase_config";
import Lottie from "react-lottie";
import { SecondRouter } from "./SecondRouter";
import { PublicRoute } from "./PublicRouter";

export const FirsRouter = () => {
  const dispatch = useDispatch();
  const [Checking, setChecking] = useState(true);
  const [Islogin, setIslogin] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("../animation/36385-old-man.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(infoSearch(user.providerData));
        setIslogin(true);
      } else {
        setIslogin(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIslogin]);

  if (Checking) {
    return <Lottie style={{ height: "38rem" }} options={defaultOptions} />;
  }

  return (
    <Router basename="/">
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={Islogin}
            path="/auth/login"
            component={LoginScreen}
          />

          {Islogin === true ? (
            <Route path="/Panel" component={SecondRouter} />
          ) : (
            <Redirect to="/auth/login" />
          )}
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
