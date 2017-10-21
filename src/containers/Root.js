import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PageAuth from "./PageAuth";
import PageList from "./PageList";
import PageAdd from "./PageAdd";
import PageLayout from "./PageLayout";
import PrivateRoute from "./PrivateRoute";

class Root extends Component {
  render() {
    return (
      <Router>
        <PageLayout>
          <PrivateRoute path="/" exact={true} component={PageList} />
          <PrivateRoute path="/add" exact={true} component={PageAdd} />
          <Route path="/login" exact={true} component={PageAuth} />
        </PageLayout>
      </Router>
    );
  }
}

export default Root;
