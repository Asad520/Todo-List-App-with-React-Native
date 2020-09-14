import React, {useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'uuid';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from './components/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

export default function App() {  
  const [todos, setTodos] = useState();

  // const textHandler = (text) => {
  //   if (text !== "") {
  //     const newText = text.trim()
  //     if (newText){
  //     setTodos((prevTodos) => {
  //       return [{ text: text, key: Math.random().toString() }, ...prevTodos];
  //     })};
  //   }
  // };
  useEffect(() =>{
    async()=>
    {
    const oldData = await AsyncStorage.getItem('todoList')
    console.log('AAAAA\n',oldData)
    setTodos(oldData)
  }
  },[])

  const displayData =async (id)=>{
    const data = await AsyncStorage.getItem('todoList')
    console.log(data,id)
  }
  const textHandler = async (text) => {
    let val
    if (text !== "") {
      const newText = text.trim()
      if (newText){
        const temp = [{key:uuid(),text:newText}]
        if(todos){
          const updateTodos = temp.concat(todos)
          setTodos(updateTodos)
          try {
            await AsyncStorage.setItem('todoList',JSON.stringify(updateTodos))
            //console.log(updateTodos)
            //console.log("1")
            //displayData("1")
          } catch (err) {
            console.log(err)
          }
        }else{
          setTodos(temp)          
          try {
            await AsyncStorage.setItem('todoList',JSON.stringify(temp))
            // console.log(temp)
            // console.log("2")
            //displayData("2")
          } catch (err) {
            console.log(err)
          }
        }
        
      }
      
    }
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
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
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor: '#2E4053',
    flex: 1,
  },
  list: {
    marginTop: 20,

    flex: 1,
  },
});