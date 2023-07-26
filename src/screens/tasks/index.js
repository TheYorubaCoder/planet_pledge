import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskPage = () => {
  return (
    <View style={styles.container}>
      <Text>Task Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TaskPage;
