import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Todo({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" color="white" size={20} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
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
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
  },
});
