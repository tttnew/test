import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PageAuth from "./PageAuth";
import PageList from "./PageList";
import PageAdd from "./PageAdd";
import PrivateRoute from "./PrivateRoute";
import Navigation from "./Navigation";

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <PrivateRoute path="/" exact={true} component={PageList} />
          <PrivateRoute path="/add" exact={true} component={PageAdd} />
          <Route path="/login" exact={true} component={PageAuth} />
        </div>
      </Router>
    );
  }
}

export default Root;
