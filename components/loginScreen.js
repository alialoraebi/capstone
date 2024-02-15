import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import withGradient from './gradient';
import styles from './styles';


import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = (props) => {
  const route = useRoute();
  const onLogin = route.params?.onLogin;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Replace 'user' and 'pass' with your desired login credentials
  const USER_CREDENTIALS = { user: 'ADMIN', pass: 'PASSWORD' };

  const handleLogin = () => {
    if (username === USER_CREDENTIALS.user && password === USER_CREDENTIALS.pass) {
      // Implement what should happen after successful login
      onLogin(); 
    } else {
      // Handle login failure (e.g., show an error message)
      alert('Incorrect username or password!');
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
              style={styles.input}
              placeholderTextColor="#FFF9"
              value={username}
              onChangeText={setUsername} // Updates the username state on change
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="#FFF9"
              secureTextEntry
              value={password}
              onChangeText={setPassword} // Updates the password state on change
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
