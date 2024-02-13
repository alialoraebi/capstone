// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen';
import AboutScreen from './components/aboutScreen'; // Make sure to create this component
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
