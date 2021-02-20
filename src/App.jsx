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
import Hello from "./Hello";

export default function App() {
  // fetch("/mock.json").then(result => {
  //   result.json().then(resulted => {
  //     alert(JSON.stringify(resulted));
  //   });
  // });
  let isUserLoggedIn = false;
  let loggedInfo = sessionStorage.getItem("userInfo");
  if (loggedInfo) {
    loggedInfo = JSON.parse(loggedInfo);
    isUserLoggedIn = loggedInfo.Id !== undefined;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dahboard">
            {isUserLoggedIn ? <Hello name={"hello"} /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
