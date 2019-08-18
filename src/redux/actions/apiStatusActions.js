import * as types from "./actionTypes";

export function beginApiCall() {
  return { types: types.BEGIN_API_CALL };
}
