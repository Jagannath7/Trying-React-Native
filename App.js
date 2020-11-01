import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import Todo from './components/Todo'

export default function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>To-Do</Text>
      </View>
        <ScrollView>
          {todos.map(todo => (
            <Todo title={todo}/>
          ))}
        </ScrollView>
       
      <TextInput 
        style={styles.todoInput}
        value={input}
        onChangeText={text=>{setInput(text)}}
      />
      <Button onPress={addTodo} title='Add Todo'/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoInput: {
    height: 40,
    borderColor: 'skyblue',
    borderWidth: 1,
    margin:20
  }
});
