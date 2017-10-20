import transactionsApp from "../reducers/";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export default function configureStore() {
  const loggerMiddleware = createLogger();
  let store = createStore(
    transactionsApp,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return store;
}
