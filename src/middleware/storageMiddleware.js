import * as types from "../constants/actionTypes";
import { TRANSACTIONS, BANKS } from "../constants/storageConstants";

// add favorites to storage
const storageMiddleware = store => next => action => {
  let result = next(action);
  switch (action.type) {
    case types.RECEIVE_TRANSACTIONS_SUCCESS:
    case types.ADD_TRANSACTION:
    case types.DELETE_TRANSACTION:
      let { transactions } = store.getState();
      localStorage.setItem(TRANSACTIONS, JSON.stringify(transactions));
      break;
    case types.RECEIVE_BANKS_SUCCESS:
      let { banks } = store.getState();
      localStorage.setItem(BANKS, JSON.stringify(banks));
      break;
  }

  return result;
};
export default storageMiddleware;
