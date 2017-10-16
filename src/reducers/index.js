import initialState from "./initialState";
import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

function banks(state = initialState.banks, action) {
  switch (action.type) {
    case types.RECEIVE_BANKS_SUCCESS:
      return [...action.data];
    default:
      return state;
  }
}

function transactions(state = initialState.transactions, action) {
  switch (action.type) {
    case types.RECEIVE_TRANSACTIONS_SUCCESS:
      return [...action.data];
    case types.ADD_TRANSACTION:
      return [...state, action.transaction];
    case types.DELETE_TRANSACTION:
      return state.filter(transaction => {
        return !(transaction.id === action.id);
      });
    default:
      return state;
  }
}

function isFetching(state = initialState.isFetching, action) {
  switch (action.type) {
    case types.REQUEST_BANKS:
    case types.REQUEST_LOGIN:
    case types.REQUEST_TRANSACTIONS:
      return true;
    case types.RECEIVE_BANKS_SUCCESS:
    case types.RECEIVE_BANKS_ERROR:
    case types.RECEIVE_TRANSACTIONS_SUCCESS:
    case types.RECEIVE_TRANSACTIONS_ERROR:
    case types.ADD_TRANSACTION:
    case types.DELETE_TRANSACTION:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_ERROR:
      return false;
    default:
      return state;
  }
}

function isLogin(state = initialState.isLogin, action) {
  switch (action.type) {
    case types.LOGOUT:
      return false;
    case types.LOGIN_SUCCESS:
      return true;
    default:
      return state;
  }
}

let transactionsApp = combineReducers({
  transactions,
  isFetching,
  isLogin,
  banks
});

export default transactionsApp;
