import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/homepage';
import LoginPage from './src/screens/loginpage';
import ProfilePage from './src/screens/profilepage';
import TaskPage from './src/screens/tasks';
import RewardsPage from './src/screens/rewards';
import EventsPage from './src/screens/events';
import CommunityPage from './src/screens/community';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeContainer}
            options={{
              headerShown: false, // Hide the header for the home page
            }}
          />
          <Stack.Screen name="Login" component={LoginPage} options={{
              headerShown: false, // Hide the header for the home page
            }}
           />
          <Stack.Screen name="ProfilePage" component={ProfilePage} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="TasksPage" component={TaskPage} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="EventsPage" component={EventsPage} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="RewardsPage" component={RewardsPage} options={{
            headerShown: false,
          }}/>
          <Stack.Screen name="CommunityPage" component={CommunityPage} options={{
            headerShown: false,
          }}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const HomeContainer = () => {
  return (
    <View style={styles.homeContainer}>
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF6E6',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF6E6',
  },
});
