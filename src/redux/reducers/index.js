import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsinProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsinProgress
});

export default rootReducer;
