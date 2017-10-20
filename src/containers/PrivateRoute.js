import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from "react-router-dom";

let PrivateRoute = props =>
  props.isLogin ? (
    <Route component={props.component} exact={props.exact} path={props.path} />
  ) : (
    <Redirect to="/login" />
  );
const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  };
};

PrivateRoute = withRouter(connect(mapStateToProps)(PrivateRoute));

export default PrivateRoute;
