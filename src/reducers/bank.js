import initialState from "./initialState";
import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

function byId(state = initialState.bank.byId, action) {
  switch (action.type) {
    case types.RECEIVE_BANKS_SUCCESS:
      let { data } = action;
      var result = data.reduce(function(map, obj) {
        map.push(obj.id);
        return map;
      }, []);
      return result;
    default:
      return state;
  }
}

function byHash(state = initialState.bank.byHash, action) {
  switch (action.type) {
    case types.RECEIVE_BANKS_SUCCESS:
      let { data } = action;
      var result = data.reduce(function(map, obj) {
        map[obj.id] = obj;
        return map;
      }, {});
      return result;
    default:
      return state;
  }
}

function isFetching(state = initialState.bank.isFetching, action) {
  switch (action.type) {
    case types.REQUEST_BANKS:
      return true;
    case types.RECEIVE_BANKS_SUCCESS:
    case types.RECEIVE_BANKS_ERROR:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  byId,
  byHash,
  isFetching
});
