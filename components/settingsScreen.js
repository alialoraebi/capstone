import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import withGradient from './gradient';
import styles from './styles';
import { useAuth } from './AuthContext';

const SettingsScreen = ({navigation}) => {

  const [username, setUsername] = useState('MakeUpRestaurant');
  const [password, setPassword] = useState('password'); 
  const [location, setLocation] = useState('Toronto, ON');
  
  const { handleLogout } = useAuth();

  const goToAiConfig = () => {
    navigation.navigate('AiConfig');
  }

  const goTofaqScreen = () => {
    navigation.navigate('faqScreen');
  }

  const goToAboutScreen = () => {
    navigation.navigate('aboutScreen');
  }
  
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Settings</Text>
      <View style={styles.settingsButtonContainer}>
          <TouchableOpacity style={styles.settingsButton} onPress={goToAiConfig}>
            <Text style={styles.buttonText}>AI Configuration</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.buttonText}>AI Behavior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton} onPress={goTofaqScreen}>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton} onPress={goToAboutScreen}>
            <Text style={styles.buttonText}>About</Text>
          </TouchableOpacity> 
      </View>
      <Text style={styles.userpassTitle}>Change Username or Password:</Text>
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
        <TouchableOpacity style={styles.saveButton} /*onPress={handleSave}*/>
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
  );
};

export default withGradient(SettingsScreen);