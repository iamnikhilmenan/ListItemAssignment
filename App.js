import React from "react";
import { View, StyleSheet } from "react-native";
import AddList from "./AddList";

function App(props) {
  return (
    <>
      <View style={styles.container}>
        <AddList />
        <AddList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default App;
