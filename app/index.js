import React from "react";
import { View, StyleSheet } from "react-native";
import Dropdown from "../components/dropdown/Dropdown";

const App = () => {
  return (
    <View style={styles.container}>
      <Dropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
