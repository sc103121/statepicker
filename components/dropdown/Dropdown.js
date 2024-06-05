import React, { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";

import { Chevron } from "react-native-shapes";

const url = "http://192.168.1.2:5002";

const getStates = () => {
  return fetch(`${url}/states`).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw new Error("Failed to fetch all states");
    }
    return response.json();
  });
};

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [states, setStates] = useState([]);

  const placeholder = {
    label: "State",
    value: null,
    color: "gray",
  };

  useEffect(() => {
    getStates()
      .then((data) => {
        setStates(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <View
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Text style={headerStyles}>State picker challenge</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={states}
        onValueChange={(value) => setSelectedValue(value)}
        style={{
          ...pickerSelectStyles,
          backgroundColor: "white",
          iconContainer: {
            top: 22,
            right: 55,
          },
        }}
        value={selectedValue}
        Icon={() => {
          return <Chevron size={1} color="gray" />;
        }}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    left: 30,
    width: 330,
    height: 50,
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    // paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const headerStyles = StyleSheet.create({
  padding: 30,
  fontSize: 28,
  fontFamily: "arial",
  fontWeight: "bold",
  color: "black",
});

export default Dropdown;
