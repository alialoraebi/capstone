import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import MyTabs from './components/tabNavigator';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen';
import AboutScreen from './components/aboutScreen'; 
import SettingsScreen from './components/settingsScreen';
import styles from './components/styles';
import { AuthProvider, useAuth } from './components/AuthContext'; 

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { isLoggedIn } = useAuth(); 

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MyTabs /> 
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
        <AppNavigation /> 
      </LinearGradient>
    </AuthProvider>
  );
};

export default App;
