import React, { useState } from 'react'; // Import useState for managing state
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import LoginScreen from './components/loginScreen'; // Adjust the path as necessary
import HomeScreen from './components/homeScreen'; // Assuming you have a HomeScreen component
import styles from './components/styles'; // Assuming styles is correctly set up for gradient and other needs

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to validate login details before setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
      {isLoggedIn ? (
        <HomeScreen />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </LinearGradient>
  );
};

export default App;
