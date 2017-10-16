import * as types from "../constants/actionTypes";
import urls from "../constants/urls";
import { TOKEN } from "../constants/storageConstants";

export function requestLogin() {
  return {
    type: types.REQUEST_LOGIN
  };
}
export function loginSuccess() {
  return {
    type: types.LOGIN_SUCCESS
  };
}
export function loginError() {
  return {
    type: types.LOGIN_ERROR
  };
}

export function logOut() {
  sessionStorage.removeItem(TOKEN);
  return {
    type: types.LOGOUT
  };
}

export function loginUser(credentials) {
  return function(dispatch) {
    dispatch(requestLogin());
    return fetch(urls.login)
      .then(response => response.json())
      .then(
        jwt => {
          if (jwt.token) {
            sessionStorage.setItem(TOKEN, jwt.token);
            dispatch(loginSuccess());
          } else {
            dispatch(loginError());
            return Promise.reject(jwt);
          }
        },
        error => {
          dispatch(loginError());
        }
      );
  };
}
