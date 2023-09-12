import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";
import CountryPhoneCodes from "./CountryPhoneCodes";
import CountryListItem from "./CountryListItem";
import DoneButton from "./DoneButton";

const RNPhoneCodeModal = (props) => {
  const [input, setInput] = useState(null);
  const [countryList, setCountryList] = useState(CountryPhoneCodes);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    search();
  }, [input]);

  const search = () => {
    if (input == null) {
      return;
    }
    setCountryList(CountryPhoneCodes.filter(filterArray));
    setLoading(false);
  };

  const filterArray = (country) => {
    const upperInput = input.toUpperCase();
    if (
      country.name.toUpperCase().startsWith(upperInput) ||
      country.code.toUpperCase().startsWith(upperInput) ||
      country.dial_code.startsWith("+" + input) ||
      country.dial_code.startsWith(input)
    ) {
      return true;
    }
    return false;
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <SafeAreaView
        style={{ backgroundColor: "white", height: "100%", width: "100%" }}
      >
        <View style={styles.background}>
          <View style={styles.container}>
            <TextInput
              autoFocus={props.autoFocus}
              numberOfLines={1}
              returnKeyType="done"
              onChangeText={(text) => {
                setLoading(true);
                setInput(text);
              }}
              value={input}
              placeholder="Search Phone Codes"
              placeholderTextColor="#93a3ab"
              style={{
                ...styles.input,
                ...{ borderColor: props.secondaryColor },
              }}
            />
            {loading ? (
              <View style={styles.activityView}>
                <ActivityIndicator size="large" color={props.secondaryColor} />
              </View>
            ) : (
              <FlatList
                keyboardShouldPersistTaps="always"
                style={styles.flatList}
                keyExtractor={(item) => item.code}
                data={countryList}
                renderItem={(item) => {
                  item = item.item;
                  return (
                    <CountryListItem
                      onPress={() => {
                        props.onDismiss();
                        props.onCountryPress(item);
                      }}
                      key={item.code}
                      name={item.name}
                      flag={item.flag}
                      code={item.dial_code}
                    />
                  );
                }}
              />
            )}

            <DoneButton
              buttonText={props.buttonText}
              buttonStyle={props.buttonStyle}
              buttonTextStyle={props.buttonTextStyle}
              color={props.primaryColor}
              onPress={props.onDismiss}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  input: {
    color: "#93a3ab",
    height: 50,
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    width: "80%",
    borderBottomWidth: 3,
  },
  flatList: {
    flex: 1,
    width: "90%",
    marginVertical: 10,
  },
  activityView: {
    flex: 1,
    width: "90%",
    marginVertical: 10,
    justifyContent: "center",
  },
});
export default RNPhoneCodeModal;
