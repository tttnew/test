import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PageAuth from "./PageAuth";
import PageList from "./PageList";
import PageAdd from "./PageAdd";
import PrivatePagesLayout from "./PrivatePagesLayout";
import PageLayout from "./PageLayout";
import PrivateRoute from "./PrivateRoute";

class Root extends Component {
  render() {
    return (
      <Router>
        <PageLayout>
          <PrivatePagesLayout>
            <Route path="/" exact={true} component={PageList} />
            <Route path="/add" exact={true} component={PageAdd} />
          </PrivatePagesLayout>
          <Route path="/login" exact={true} component={PageAuth} />
        </PageLayout>
      </Router>
    );
  }
}

export default Root;
