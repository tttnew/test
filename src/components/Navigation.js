import React from "react";
import { Link, withRouter } from "react-router-dom";

const Navigation = withRouter(({ logoutHandler, location }) => (
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
));

export default Navigation;
