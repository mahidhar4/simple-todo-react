import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./style.css";
import Login from "./components/login";
import DashBoard from "./components/dashboard";

export default function App() {
  let isUserLoggedIn = false;
  let loggedInfo = sessionStorage.getItem("userInfo");
  if (loggedInfo) {
    loggedInfo = JSON.parse(loggedInfo);
    console.log(loggedInfo);
    isUserLoggedIn = loggedInfo.token !== undefined;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dahboard">
            {isUserLoggedIn ? (
              <DashBoard user={loggedInfo} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/">
            {isUserLoggedIn ? <Redirect to="/dahboard" /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
