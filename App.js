import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/homepage';
import LoginPage from './screens/loginpage';
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
