import transactionsApp from "../reducers/";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import storageMiddleware from "../middleware/storageMiddleware";

export default function configureStore() {
  const loggerMiddleware = createLogger();
  let store = createStore(
    transactionsApp,
    applyMiddleware(storageMiddleware, thunkMiddleware, loggerMiddleware)
  );

  return store;
}
