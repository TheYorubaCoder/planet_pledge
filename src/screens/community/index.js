import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityPage = () => {
  return (
    <View style={styles.container}>
      <Text>Community</Text>
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

export default CommunityPage;
