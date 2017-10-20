import initialState from "./initialState";
import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

function isLogin(state = initialState.auth.isLogin, action) {
  switch (action.type) {
    case types.LOGOUT:
      return false;
    case types.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
}

function isFetching(state = initialState.auth.isFetching, action) {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return true;
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  isLogin,
  isFetching
});
