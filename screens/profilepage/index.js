import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = ({ userName, userPoints }) => {
  return (
    <View style={styles.container}>
      {/* Circle */}
      <View style={styles.circle}>
        <Text style={styles.points}>{userPoints}</Text>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hi, Peter! {userName}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/tasks.png')} style={styles.buttonImage} />
            <Text style={styles.title}>TASKS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/events.png')} style={styles.buttonImage} />
            <Text style={styles.title}>EVENTS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/rewards.png')} style={styles.buttonImage} />
            <Text style={styles.title}>REWARDS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/community.png')} style={styles.buttonImage} />
            <Text style={styles.title}>COMMUNITY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FEF6E6',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#6EAC88',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100, 
  },
  points: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  greeting: {
    marginTop: 20,
    fontSize: 48,
    fontWeight: 'bold',
  },
  title:{
    fontSize:22,
    fontWeight:'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 18,
    borderColor: '#0D7B48',
  },
});

export default ProfilePage;
