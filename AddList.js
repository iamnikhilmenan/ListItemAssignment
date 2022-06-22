import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  TextInput,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("screen");

function AddList(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const onAddButtonPress = () => {
    if (text === "Add") return;
    setItems((prevState) => [...prevState, text]);
    setText("");
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={[styles.addItemContainer]}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Item"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Button onPress={onAddButtonPress} title="Add" color="#841584" />
        </View>

        <View style={styles.listItem}>
          {items.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item}
            </Text>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  addItemContainer: {
    flexDirection: "row",
  },

  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    paddingHorizontal: 12,
  },

  item: {
    borderBottomWidth: 1,
    marginVertical: 12,
    padding: 8,
  },

  textInput: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default AddList;
