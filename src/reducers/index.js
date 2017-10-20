import bank from "./bank";
import transaction from "./transaction";
import auth from "./auth";
import { combineReducers } from "redux";

let transactionsApp = combineReducers({
  bank,
  transaction,
  auth
});

export default transactionsApp;
