import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ textHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo...."
        onChangeText={changeHandler}
        placeholderTextColor="#74b3b0"
      />
      <Button
        title="Add Todo!"
        color="coral"
        onPress={() => textHandler(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    marginTop: -10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRightWidth: 2,
    borderRightColor: "#ddd",
    borderLeftWidth: 2,
    borderLeftColor: "#ddd",
    color: "white",
  },
});
