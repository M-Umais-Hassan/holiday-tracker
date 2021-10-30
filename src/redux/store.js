import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// reducers
import allReducers from "./reducers/allReducers";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
