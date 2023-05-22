import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([]);
  };

  return (
    <View>
      <Text>Todo List</Text>
      <TodoList todos={todos} />
      <AddTodoForm onAddTodo={handleAddTodo} />
    </View>
  );
};

export default HomeScreen;

