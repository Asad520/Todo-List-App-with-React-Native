import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>A SAD Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#212F3C",
    marginTop: 30,
  },
  title: {
    marginTop: -10,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
