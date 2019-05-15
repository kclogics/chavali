import * as types from "./actionTypes";
import * as authorAPi from "../../api/authorApi";

// Createauthor accept author as a argument
//  type property , Payload

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorAPi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
