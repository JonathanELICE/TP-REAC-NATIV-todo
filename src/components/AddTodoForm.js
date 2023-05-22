import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    onAddTodo(todoText);
    setTodoText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter task"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodoForm;

