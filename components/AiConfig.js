import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import withGradient from './gradient';
import styles from './styles';
import { useAuth } from './AuthContext';

const SettingsScreen = () => {
    const [username, setUsername] = useState('MakeUpRestaurant');
    const [password, setPassword] = useState('password'); 
    const [location, setLocation] = useState('Toronto, ON');
    
    const { handleLogout } = useAuth();
    const navigation = useNavigation(); // Get the navigation object

    // Function to navigate to AiConfig screen
    const goToAiConfig = () => {
        navigation.navigate('AiConfig');
    };

    return (
        <View style={styles.settingsContainer}>
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
                {/* Pressing this button will navigate to AiConfig screen */}
                <TouchableOpacity style={styles.roundButton} onPress={goToAiConfig}>
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
    );
};

export default withGradient(SettingsScreen);
