import { combineReducers } from "redux";
import { holidaysReducer } from "./calenderReducer";

const allReducers = combineReducers({
  holidaysReducer,
});

export default allReducers;
