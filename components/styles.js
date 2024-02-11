// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
      },
      container: {
        flex: 1,
      },
      keyboardView: {
        flex: 1,
      },
      loginContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: '#FFFFFF40', 
        borderRadius: 10,
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        alignItems: 'center',
        margin: 20,
        marginLeft: 110
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
        backgroundColor: '#FFFFFF10', 
        padding: 15,
        borderRadius: 5,
        marginVertical: 20,
    
      },
      loginButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#8E44AD', 
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
//   loginScreen: {
//     // ... your styles for login screen
//   },
//   dashboardScreen: {
//     // ... your styles for dashboard screen
//   },
//   settingsScreen: {
//     // ... your styles for settings screen
//   },
//   aboutScreen: {
//     // ... your styles for about screen
//   },
//   faqScreen: {
//     // ... your styles for FAQ screen
//   },
//   // Add more component styles as needed
});
