import { combineReducers } from "redux";
import selectedColorReducer from "./selectedColorReducer";

const rootReducers = () =>
  combineReducers({
    selectedColorReducer,
  });
export default rootReducers;
