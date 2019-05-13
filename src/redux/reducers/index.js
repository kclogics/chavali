import { combineReducers } from "redux";
import tools from "./toolReducer";

const rootReducer = combineReducers({
  tools: tools
});

export default rootReducer;
