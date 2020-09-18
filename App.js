import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import uuid from "uuid";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    (async function getOldData() {
      try {
        const oldData = JSON.parse(await AsyncStorage.getItem("todoList"));
        if (oldData) setTodos(oldData);
        else console.log("New DB");
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const setDB = async (key) => {
    try {
      await AsyncStorage.setItem("todoList", JSON.stringify(key));
    } catch (err) {
      console.log(err);
    }
  };
  const textHandler = async (text) => {
    let val;
    if (text !== "") {
      const newText = text.trim();
      if (newText) {
        const temp = [{ key: uuid(), text: newText }];
        if (todos) {
          const updateTodos = temp.concat(todos);
          setTodos(updateTodos);
          setDB(updateTodos);
        } else {
          setTodos(temp);
          setDB(temp);
        }
      }
    }
  };

  const pressHandler = (key) => {
    const removeItem = (todos) => {
      return todos.filter((todo) => todo.key !== key);
    };
    const newList = removeItem(todos);
    setTodos(newList);
    setDB(newList);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    backgroundColor: "#2E4053",
    flex: 1,
  },
  list: {
    marginTop: 20,

    flex: 1,
  },
});
