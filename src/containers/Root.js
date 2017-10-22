import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import PageAuth from "./PageAuth";
import PageList from "./PageList";
import PageAdd from "./PageAdd";

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={PageList} />
          <Route path="/add" exact={true} component={PageAdd} />
          <Route path="/login" exact={true} component={PageAuth} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
