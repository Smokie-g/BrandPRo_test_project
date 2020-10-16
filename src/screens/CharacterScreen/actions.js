import { createAction } from "redux-actions";

import { setCharacters, setNextPage } from "../../actions";

export const getCharactersRequest = createAction("GET_CHARACTERS_REQUEST");
export const getCharactersSuccess = createAction("GET_CHARACTERS_SUCCESS");
export const getCharactersFailure = createAction("GET_CHARACTERS_FAILURE");

export const getCharacters = ( page ) => async (dispatch) => {
  dispatch(getCharactersRequest());
  try {
    let res = await fetch(
      `https://swapi.dev/api/people/?page=${page}`
    );
    let response = await res.json();
    dispatch(setNextPage({ nextPage: response.next }));
    if (response.results) {
      dispatch(setCharacters({ characters: response.results }));
    }
    dispatch(getCharactersSuccess());
  } catch(e) {
    dispatch(getCharactersFailure());
  }
};