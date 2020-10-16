import { createSwitchNavigator, createAppContainer } from "react-navigation";

import MainStack from "./MainStack";

import { MAIN_STACK } from "../constants";

const root = createSwitchNavigator(
  {
    [MAIN_STACK]: {
      screen: MainStack
    },
  },
  {}
);

export default createAppContainer(root);