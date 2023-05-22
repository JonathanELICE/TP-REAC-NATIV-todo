import React from 'react';
import { View, Text } from 'react-native';

const TodoList = () => {
  const todos = ['Task 1', 'Task 2', 'Task 3']; // Exemple de données de tâches

  return (
    <View>
      {todos.map((todo, index) => (
        <Text key={index}>{todo}</Text>
      ))}
    </View>
  );
};

export default TodoList;

