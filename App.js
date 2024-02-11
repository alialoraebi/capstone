import React from 'react';
import LoginScreen from './components/loginScreen.js'; 
import { LinearGradient } from 'expo-linear-gradient';
import styles from './components/styles.js';

const App = () => {
  return (
    <LinearGradient colors={['#7D3C98','#7D3C98', '#FFFFFF']} style={styles.gradient}>
      <LoginScreen />
    </LinearGradient>
  );
};

export default App;