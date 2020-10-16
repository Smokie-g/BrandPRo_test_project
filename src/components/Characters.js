import React from "react";
import styled from "styled-components";
import { View, Text, StyleSheet, Image } from "react-native";

export const JustText = styled.Text`
  font-size: 12;
  color: #8a8c9c;
`;

export const Characters = ({ name }) => {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
      <Image source={require("../../assets/arrow-right.png")} style={styles.arrowStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    shadowOffset: {width: 5, height: 0},
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  textStyle:{
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
  },
  arrowStyle: {
    width: 28,
    height: 28,
  },
});
