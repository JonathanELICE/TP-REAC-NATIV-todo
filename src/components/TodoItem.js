import React from 'react';
import { View, Text } from 'react-native';

const TodoItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default TodoItem;

