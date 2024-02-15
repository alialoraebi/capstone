import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MyTabs from './components/tabNavigator';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen';
import AboutScreen from './components/aboutScreen'; 
import styles from './components/styles';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
    <NavigationContainer>
      {isLoggedIn ? (
        <MyTabs/>
      ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} initialParams={{ onLogin: handleLogin }} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
          </Stack.Navigator>
      )}
    </NavigationContainer>
    </LinearGradient>
  );
};

export default App;