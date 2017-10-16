import React, { Component } from "react";

class PageAdd extends Component {
  render() {
    let { isFetching, handleSubmit } = this.props;
    return (
      <div className="form">
        <form
          onSubmit={e => {
            e.preventDefault();
            let login = this.login.value;
            let password = this.password.value;
            if (!login || !password) {
              return;
            }
            handleSubmit({ login: login, password: password });
          }}
        >
          <div>
            <label>Логин</label>
            <input type="text"
              ref={input => {
                this.login = input;
              }}
            />
          </div>
          <div>
            <label>Пароль</label>
            <input
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
          </div>
          <div>
            <input type="submit" disabled={isFetching} />
          </div>
        </form>
      </div>
    );
  }
}

export default PageAdd;
