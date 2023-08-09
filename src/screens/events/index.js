import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const EventsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Events</Text>
      <Calendar
        // You can customize the appearance and behavior of the calendar here
        // For example, you can specify marked dates, onDayPress event, etc.
        // Please refer to the documentation of react-native-calendars for more details.
      />
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
  heading:{
      marginTop: 0,
      fontSize: 48,
      fontWeight: 'bold',
  },
});

export default EventsPage;
