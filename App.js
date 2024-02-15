import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js'; // Make sure to create this component
import StatisticsScreen from './components/StatisticsScreen.js'; // Make sure to create this component
import SettingScreen from './components/SettingScreen.js'; // Make sure to create this component
import styles from './components/styles';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Statistics" component={StatisticsScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            {/* Add other screens here as needed */}
          </Stack.Navigator>
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )}
      </LinearGradient>
    </NavigationContainer>
  );
};

export default App;