
import React, {useState} from 'react';
import styles from './styles';

import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
          <Text style={styles.title}>AI Call Assist</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>LOG IN</Text>
            <TextInput
              placeholder="Username"
              style={styles.input}
              placeholderTextColor="#FFF9"
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              placeholderTextColor="#FFF9"
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton}>
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

export default LoginScreen;
