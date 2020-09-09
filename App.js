import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Make tea",
      key: "1",
    },
    {
      text: "Commit git changes",
      key: "2",
    },
    {
      text: "Sleep",
      key: "3",
    },
  ]);

  const textHandler = (text) => {
    if (text !== "") {
      setTodos((prevTodos) => {
        console.log(text);
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    }
  };
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo textHandler={textHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todo item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
