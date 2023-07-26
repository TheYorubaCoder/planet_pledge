import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardsPage = () => {
  return (
    <View style={styles.container}>
      <Text>Rewards</Text>
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

export default RewardsPage;
