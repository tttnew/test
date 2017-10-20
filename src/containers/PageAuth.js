import React, { Component } from "react";
import { loginUser } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PageAuth extends Component {
  render() {
    let { isFetching, handleSubmit, isLogin } = this.props;

    return (
      <div className="form">
        {isLogin && <Redirect to="/" />}
        <form
          onSubmit={e => {
            e.preventDefault();
            let login = e.currentTarget.login.value;
            let password = e.currentTarget.password.value;
            if (!login || !password) {
              return;
            }
            handleSubmit({ login: login, password: password });
          }}
        >
          <div>
            <label>Логин</label>
            <input type="text" name="login" />
          </div>
          <div>
            <label>Пароль</label>
            <input type="password" name="password" />
          </div>
          <div>
            <input type="submit" disabled={isFetching} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    isLogin: state.auth.isLogin
  };
};

const mapDispatchToState = dispatch => {
  return {
    handleSubmit: credentials => {
      dispatch(loginUser(credentials)).catch(() => {
        alert("Ошибка");
      });
    }
  };
};

PageAuth = connect(mapStateToProps, mapDispatchToState)(PageAuth);

export default PageAuth;
