import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PageAuthAsync from "./PageAuthAsync";
import PageListAsync from "./PageListAsync";
import PageAddAsync from "./PageAddAsync";
import Navigation from "../components/Navigation";
import { logOut } from "../actions/auth";
import { fetchBanks } from "../actions/bank";
import { fetchTransactions } from "../actions/transaction";

class Root extends Component {
  componentDidMount() {
    let { fetch, banks } = this.props;
    if (banks.length === 0) {
      fetch();
    }
  }

  render() {
    let { isLogin, logout } = this.props;
    return (
      <Router>
        <div>
          {isLogin && <Navigation logoutHandler={logout} />}
          <Route
            path="/"
            exact={true}
            render={() => {
              return isLogin ? <PageListAsync /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/add"
            exact={true}
            render={() => {
              return isLogin ? <PageAddAsync /> : <Redirect to="/login" />;
            }}
          />
          <Route
            path="/login"
            exact={true}
            render={() => {
              return isLogin ? <Redirect to="/" /> : <PageAuthAsync />;
            }}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
    banks: state.banks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => {
      dispatch(fetchBanks())
        .then(() => {
          dispatch(fetchTransactions());
        })
        .catch(() => {
          alert("Ошибка");
        });
    },
    logout: () => {
      dispatch(logOut());
    }
  };
};

Root = connect(mapStateToProps, mapDispatchToProps)(Root);

export default Root;
