import { combineReducers } from "redux";

import { mainReducer, characters } from "../reducers";

const rootReducer = combineReducers({
  mainReducer,
  characters,
});

export default (state, action) => {
  let newState = state;

  return rootReducer(newState, action);
};