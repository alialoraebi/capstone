import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import withGradient from './gradient';
import styles from './styles';
import { useAuth } from './AuthContext'; 


import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = (props) => {
  const { handleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const USER_CREDENTIALS = { user: 'ADMIN', pass: 'PASSWORD' };

  const attemptLogin = async () =>  {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        handleLogin(data.token); // Call the handleLogin function from the AuthContext
        console.log(data.message); // Display success message
      } else {
        const error = await response.text();
        console.error(error); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
          <Text style={styles.title}>AI CALL ASSIST</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>LOG IN</Text>
            <TextInput
              placeholder="Username"
              style={styles.loginInput}
              placeholderTextColor="#FFF9"
              value={username}
              onChangeText={setUsername} // Updates the username state on change
            />
            <TextInput
              placeholder="Password"
              style={styles.loginInput}
              placeholderTextColor="#FFF9"
              secureTextEntry
              value={password}
              onChangeText={setPassword} // Updates the password state on change
            />
            <TouchableOpacity style={styles.loginButton} onPress={attemptLogin}>
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={styles.checkbox}>
                  <Text style={styles.checkboxText}>{rememberMe ? '✓' : ''}</Text>
                </View>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default withGradient(LoginScreen);

