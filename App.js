import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, LogBox } from 'react-native';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import combinedReducers from "./src/store";

import { RootScreen } from "./src/screens/RootScreen";

const store = createStore(
  combinedReducers,
  {},
  applyMiddleware(ReduxThunk)
);

LogBox.ignoreLogs(
  [
    "Warning: componentWillReceiveProps has been renamed",
    "Expected style",
    "currentlyFocusedField is deprecated"
  ]
);

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {Platform.OS === "ios" ? (
          <AppStatusBar
            barStyle="dark-content"
          />
        ) : null}
        <RootScreen />
      </Provider>
    );
  }
}
