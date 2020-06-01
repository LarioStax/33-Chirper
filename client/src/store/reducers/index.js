import {combineReducers} from "redux";
import currentUser from "./currentUser.js";
import errors from "./errors.js";

const rootReducer = combineReducers({
  currentUser,
  errors
})

export default rootReducer;