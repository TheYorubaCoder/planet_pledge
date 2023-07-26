import React from 'react';
import { View, StyleSheet } from 'react-native';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmptyPage;
