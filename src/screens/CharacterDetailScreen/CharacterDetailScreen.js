import React, { PureComponent } from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
  RefreshControl,
} from "react-native";

import { Header, HeaderLeftButton } from "../../components";

class CharacterDetailScreen extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      name: props.navigation.state.params.name,
      gender: props.navigation.state.params.gender,
      height: props.navigation.state.params.height,
      mass: props.navigation.state.params.mass,
      birthday: props.navigation.state.params.birthday,
      films: props.navigation.state.params.films
    }
  }

  renderFilms = ({ item }) => {
    return (
      <View>
        <Text style={styles.filmsTextStyle}>
          {item}
        </Text>
      </View>
    );
  };

  render() {
    const {
      gender,
      height,
      mass,
      birthday,
      films
    } = this.state;

    let partOfFilms = films.map(el => {
      let part = el[el.length - 2];
      let filmString = `• Часть ${part}`;
      return filmString;
    });

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{
          padding: 30,
        }}>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.textStyle}>Gender:</Text>
          </View>
          <View style={{ marginRight: 120 }}>
            <Text style={styles.textStyle}>{gender}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.textStyle}>Height:</Text>
          </View>
          <View style={{ marginRight: 120 }}>
            <Text style={styles.textStyle}>{height}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.textStyle}>Mass:</Text>
          </View>
          <View style={{ marginRight: 120 }}>
            <Text style={styles.textStyle}>{mass}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 30 }}>
            <Text style={styles.textStyle}>Birthday:</Text>
          </View>
          <View style={{ marginRight: 120 }}>
            <Text style={styles.textStyle}>{birthday}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.filmsHeaderTextStyle}>
            Films:
          </Text>
          <FlatList
            data={partOfFilms}
            renderItem={this.renderFilms}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  };
}

CharacterDetailScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "black",
    marginTop: Platform.OS==="ios" ? 20 : 0
  },
  headerTitle: () => <Header color="yellow" title={navigation.state.params.name} />,
  headerLeft: () => <HeaderLeftButton navigation={navigation} />
});

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f0f0f0",
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    shadowOffset: { width: 5, height: 0 },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  filmsHeaderTextStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 30,
    paddingTop: 30,
  },
  filmsTextStyle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 45,
  },
  settings: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  containerStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: "flex-start",
    marginLeft: 30,
  },
});