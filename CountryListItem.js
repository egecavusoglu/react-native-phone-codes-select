import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CountryListItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <View style={styles.view}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text numberOfLines={1} style={styles.name}>
          {props.name}
        </Text>
        <Text numberOfLines={1} style={styles.code}>
          {props.code}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  view: {
    width: "100%",
    flexDirection: "row",
    height: 45,
    alignItems: "center",
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1
  },
  flag: {
    flex: 0.7,
    fontSize: 32
  },
  name: {
    flex: 3,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "600"
  },
  code: {
    flex: 1.1,
    fontSize: 20,
    letterSpacing: 1,

    fontWeight: "600",
    color: "#93a3ab"
  }
});
export default CountryListItem;
