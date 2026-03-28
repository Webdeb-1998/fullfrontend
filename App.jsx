import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/authentication/loginScreen';
import RegisterScreen from './src/screens/authentication/registerScreen';
import HomeScreen from './src/screens/dashboard/homeScreen';
import WelcomeScreen from './src/screens/authentication/welcomeScreen';
import OtpScreen from './src/screens/authentication/otpScreen';
import ProfileScreen from './src/screens/dashboard/profileScreen';


// image icon tab bottom 
import InActiveHome from './assets/images/inactivehome.svg';
import HomeActive from './assets/images/activehome.svg';
import InActiveProfile from './assets/images/inactiveuser.svg';
import ProfileActive from './assets/images/activeuser.svg';

import { Image, StyleSheet, View } from 'react-native';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconSource;

         if (route.name === 'Home') {
            return  focused ? (
              <HomeActive width={size} height={size} />
            ) : (
              <InActiveHome width={size} height={size} />
            );
          }
        else if (route.name === 'Profile') {
            return  focused ? (
              <ProfileActive width={size} height={size} />
            ) : (
              <InActiveProfile width={size} height={size} />
            );
          }

        return (
          <View style={styles.iconContainer}>
            <Image
              source={iconSource}
              style={[styles.icon, { tintColor: color, width: size, height: size }]}
            />
          </View>
        );
      },
      tabBarActiveTintColor: '#4CAF50',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* Add more tabs here */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Home" component={TabsNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
 
  icon: {
    resizeMode: 'contain',
    color: 'gray',
  },
});
export default App;