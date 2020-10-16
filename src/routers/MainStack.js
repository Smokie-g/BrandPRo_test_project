import { createStackNavigator } from "react-navigation";

import { CharacterScreen } from "../screens/CharacterScreen";
import { CharacterDetailScreen } from "../screens/CharacterDetailScreen";

import { CHARACTER_SCREEN, CHARACTER_DETAIL_SCREEN } from "../constants";

const MainStack = createStackNavigator(
  {
    [CHARACTER_SCREEN]: {
      screen: CharacterScreen
    },
    [CHARACTER_DETAIL_SCREEN]: {
      screen: CharacterDetailScreen
    },
  },
  {
    initialRouteName: CHARACTER_SCREEN,
  }
);

export default MainStack;