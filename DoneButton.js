import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const DoneButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      <View
        style={{
          ...styles.button,
          ...{ backgroundColor: props.color },
          ...props.buttonStyle,
        }}
      >
        <Text style={{ ...styles.text, ...props.buttonTextStyle }}>
          {props.buttonText ? props.buttonText : "Done"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 300,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 6,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.75,
  },
});
export default DoneButton;
