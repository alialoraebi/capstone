// import React from 'react';
// import LoginScreen from './components/loginScreen.js'; 

// const App = () => {
//   return <LoginScreen />;
// };

// export default App;

import React, { useState } from 'react';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen'; // Make sure you import the HomeScreen

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // You would typically validate login details before setting this to true
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <HomeScreen /> : <LoginScreen onLogin={handleLogin} />;
};

export default App;

