import { connect } from "react-redux";
import CharacterScreenComponent from "./CharacterScreen";

import { getCharacters } from "./actions";

const mapStateToProps = state => ({
  characters: state.characters.characters,
  nextPage: state.characters.nextPage
});

const mapDispatchToProps = {
  getCharacters
};

export const CharacterScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterScreenComponent);