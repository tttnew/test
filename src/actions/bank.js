import * as types from "../constants/actionTypes";
import urls from "../constants/urls";

export const requestBanks = () => {
  return {
    type: types.REQUEST_BANKS
  };
};

export const receiveBanksSuccess = data => {
  return {
    type: types.RECEIVE_BANKS_SUCCESS,
    data
  };
};

export const receiveBanksError = () => {
  return {
    type: types.RECEIVE_BANKS_ERROR
  };
};

export const fetchBanks = () => {
  return function(dispatch, getState) {
    dispatch(requestBanks());
    return fetch(urls.banks)
      .then(response => response.json(), error => dispatch(receiveBanksError()))
      .then(json => {
        if (json) {
          dispatch(receiveBanksSuccess(json));
        } else {
          dispatch(receiveBanksError());
        }
      });
  };
};
