import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from "react-router-dom";
import Navigation from "./Navigation";

let PrivatePagesLayout = ({ children, isLogin }) =>
  !isLogin ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <Navigation />
      {children}
    </div>
  );
const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
  };
};

PrivatePagesLayout = withRouter(connect(mapStateToProps)(PrivatePagesLayout));

export default PrivatePagesLayout;
