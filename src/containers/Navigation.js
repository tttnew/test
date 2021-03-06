import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions/auth";

let Navigation = withRouter(({ isLogin, logoutHandler, location }) => {
  return (
    <nav>
      <ul>
        {location.pathname != "/add" && (
          <li>
            <Link to="/add">Добавить транзакцию</Link>
          </li>
        )}
        {location.pathname != "/" && (
          <li>
            <Link to="/">Список транзакций</Link>
          </li>
        )}
        <li>
          <a
            className="active"
            onClick={() => {
              logoutHandler();
            }}
          >
            Выйти
          </a>
        </li>
      </ul>
    </nav>
  );
});

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => {
      dispatch(logOut());
    }
  };
};
Navigation = withRouter(connect(null, mapDispatchToProps)(Navigation));

export default Navigation;
