import * as types from "../constants/actionTypes";
import urls from "../constants/urls";

export const requestTransactions = () => {
  return {
    type: types.REQUEST_TRANSACTIONS
  };
};

export const receiveTransactionsSuccess = data => {
  return {
    type: types.RECEIVE_TRANSACTIONS_SUCCESS,
    data
  };
};

export const receiveTransactionsError = () => {
  return {
    type: types.RECEIVE_TRANSACTIONS_ERROR
  };
};

export const addTransaction = transaction => {
  return {
    type: types.ADD_TRANSACTION,
    transaction
  };
};

export const deleteTransaction = id => {
  return {
    type: types.DELETE_TRANSACTION,
    id
  };
};

export const fetchTransactions = () => {
  return function(dispatch, getState) {
    dispatch(requestTransactions());
    return fetch(urls.transactions)
      .then(
        response => response.json(),
        error => dispatch(receiveTransactionsError(error))
      )
      .then(json => {
        if (json) {
          dispatch(receiveTransactionsSuccess(json));
        } else {
          dispatch(receiveTransactionsError());
        }
      });
  };
};

export const addTransactionsRequest = transaction => {
  return function(dispatch, getState) {
    dispatch(requestTransactions());
    return fetch(urls.add)
      .then(
        response => response.json(),
        error => dispatch(receiveTransactionsError(error))
      )
      .then(json => {
        if (json.ok) {
          dispatch(addTransaction(transaction));
        } else {
          dispatch(receiveTransactionsError());
        }
      });
  };
};

export const deleteTransactionRequest = id => {
  return function(dispatch, getState) {
    dispatch(requestTransactions());
    return fetch(urls.delete)
      .then(
        response => response.json(),
        error => dispatch(receiveTransactionsError())
      )
      .then(json => {
        if (json.ok) {
          dispatch(deleteTransaction(id));
        } else {
          dispatch(receiveTransactionsError());
        }
      });
  };
};
