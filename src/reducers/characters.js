import { handleActions } from "redux-actions";

import { setCharacters, setNextPage } from "../actions";

const initialState = {
  characters: [],
  nextPage: 1,
};

export const characters = handleActions(
  {
    [setCharacters](state, { payload }) {
      const payloadFilter = payload.characters.map(character => character.name);
      const charactersFiltered = state.characters.filter(character =>
        !payloadFilter.includes(String(character.name)));
      return { ...state, characters: charactersFiltered.concat(payload.characters) };
    },
    [setNextPage](state, { payload }) {
      return { ...state, nextPage: payload.nextPage };
    },
  },
  initialState
);