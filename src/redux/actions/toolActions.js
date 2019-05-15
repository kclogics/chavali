import * as types from "./actionTypes";
import * as courseAPi from "../../api/courseApi";

export function createTool(tool) {
  // debugger;
  return { type: types.CREATE_TOOL, tool: tool };
}

// CreateTool accept tool as a argument
//  type property , Payload

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseAPi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
