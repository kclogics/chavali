import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function toolReducer(state = initialState.tools, action) {
  switch (action.type) {
    case types.CREATE_TOOL:
      // debugger;
      return [...state, { ...action.tool }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
// export default function toolReducer(state = [], action) {
//   switch (action.type) {
//     case types.CREATE_TOOL:
//       // debugger;
//       return [...state, { ...action.tool }];
//     case types.LOAD_COURSES_SUCCESS:
//       return action.courses;
//     default:
//       return state;
//   }
// }
