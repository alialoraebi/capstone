import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardView}>
        <LinearGradient colors={['#7D3C98', '#FFFFFF']} style={styles.gradient}>
          <Text style={styles.title}>       AI CALL ASSIST</Text>
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
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#7D3C98', // Set your desired color
  },
  keyboardView: {
    flex: 1,
  },
  loginContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF40', // Adjust transparency as needed
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
    margin: 20,
    marginLeft: 75
  },
  loginTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF10', // Adjust transparency as needed
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,

  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#8E44AD', // Adjust the color as needed
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    margin: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxText: {
    color: '#FFF',
  },
  rememberMeText: {
    color: '#FFF',
  },
  forgotPasswordText: {
    color: '#FFF',
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;
