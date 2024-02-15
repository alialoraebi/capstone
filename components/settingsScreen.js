// settingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import withGradient from './gradient';
import { MaterialIcons } from '@expo/vector-icons'; // Make sure you have this installed

const SettingsScreen = (props) => {

  const [username, setUsername] = useState('MakeUpRestaurant');
  const [password, setPassword] = useState('password'); 
  const [location, setLocation] = useState('Toronto, ON');
  
  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <LinearGradient colors={['#7D3C98', '#FFFFFF']} style={styles.gradient}>
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onBackPress} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        <Text style={styles.inputLabel}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>AI Configuration</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>AI Behavior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 3, // for Android shadow
    shadowOpacity: 0.3, // for iOS shadow
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  roundButton: {
    backgroundColor: 'white',
    width: 110,
    height: 110,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.3, 
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  largeRoundButton: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowOpacity: 0.3, 
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#7D3C98',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#8E44AD',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default withGradient(SettingsScreen);
