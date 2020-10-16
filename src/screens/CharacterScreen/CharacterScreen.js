import React, { PureComponent } from "react";
import {
  View,
  Platform,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";

import { Header, Characters } from "../../components";
import { CHARACTER_DETAIL_SCREEN } from "../../constants";
import { Separator } from "./components";

class CharacterScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      refreshing: false,
      page: 1,
    };
  }

  async componentDidMount() {
    await this.props.getCharacters(this.state.page);
    this.setState({ characters: this.props.characters });
  }

  // load the next page with the characters
  handleLoadMore = () => {
    if (!this.props.nextPage) return;
    this.setState({
      refreshing: true,
      page: this.state.page + 1
    }, this.onGetCharacters);
  };

  onGetCharacters = async () => {
    await this.props.getCharacters(this.state.page);
    this.setState({ characters: this.props.characters });
    this.setState({ refreshing: false });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.4}
        style={styles.settings}
        underlayColor="#44454a"
        onPress={() => {this.props.navigation.navigate(CHARACTER_DETAIL_SCREEN, {
          name: item.name,
          gender: item.gender,
          height: item.height,
          mass: item.mass,
          birthday: item.birth_year,
          films: item.films
        })}}
      >
        <View>
          <Characters
            name={item.name}
          />
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { characters, refreshing } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          style={{ flex: 1, width: "100%" }}
          data={characters}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <Separator />}
          refreshing={refreshing}
          initialNumToRender={10}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.8}
          ListFooterComponent={<View style={{ paddingBottom: 10 }} />}
        />
      </View>
    );
  };
}

CharacterScreen.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: "black",
  },
  headerTitle: () => <Header color="yellow" title="List of Characters" />
});

export default CharacterScreen;

const styles = StyleSheet.create({
  iconList: {
    fontSize: 27,
    marginRight: 12,
    color: "#8a8c9c"
  },
  iosHeaderCenter: {
    height: "100%",
    alignItems: "center",
    marginBottom: 5
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    paddingTop: 30,
    paddingBottom: 25,
    marginLeft: 10,
  },
  settings: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 10,
  },
  iconSettings: {
    width: 28,
    height: 28,
    marginTop: 5,
    tintColor: "#4169E1",
  },
});