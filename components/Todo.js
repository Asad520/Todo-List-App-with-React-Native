import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Todo({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "#2dadff",
  },
});
