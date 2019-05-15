import { combineReducers } from "redux";
import tools from "./toolReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  tools: tools,
  authors: authors
});

export default rootReducer;
