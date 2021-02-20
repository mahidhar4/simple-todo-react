import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./style.css";

export default function App() {
  // fetch("/mock.json").then(result => {
  //   result.json().then(resulted => {
  //     alert(JSON.stringify(resulted));
  //   });
  // });

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dahboard">
            <Hello name={this.state.name} />
            <p>Start editing to see some magic happen :)</p>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
