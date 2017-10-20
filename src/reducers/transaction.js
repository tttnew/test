import initialState from "./initialState";
import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

function data(state = initialState.transaction.data, action) {
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

function isFetching(state = initialState.transaction.isFetching, action) {
  switch (action.type) {
    case types.REQUEST_TRANSACTIONS:
      return true;
    case types.RECEIVE_TRANSACTIONS_SUCCESS:
    case types.RECEIVE_TRANSACTIONS_ERROR:
    case types.ADD_TRANSACTION:
    case types.DELETE_TRANSACTION:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isFetching
});
