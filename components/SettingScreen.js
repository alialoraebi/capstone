import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the 'useNavigation' hook
import withGradient from './gradient';
import styles from './styles';

const SettingsScreen = () => {
    const [username, setUsername] = useState('MakeUpRestaurant');
    const [password, setPassword] = useState('password');
    const [location, setLocation] = useState('Toronto, ON');
    
    const navigation = useNavigation(); // Initialize the 'navigation' object

    const goToAiConfig = () => {
        navigation.navigate('AiConfig'); // Navigate to 'AiConfig' screen
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
        </View>
    );
};

export default withGradient(SettingsScreen);