import shuffleReducer from "./shuffleReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  shuffleReducer,
});
export default allReducers;