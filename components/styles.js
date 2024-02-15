// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    gradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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
        textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFF',
      margin: 40,
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
      },
      menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
      menuButton: {
          backgroundColor: '#8E44AD', 
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          marginHorizontal: 5, 
        },
      menuText: {
          color: '#FFF',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
      },
      container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerContainer: {
        marginTop: 10,
        backgroundColor: '#7D3C98', 
      },
      statsContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 10,
      },
      statsBox: {
        backgroundColor: '#8E44AD', 
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
      },
      statsNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
      },
      statsText: {
        fontSize: 18,
        color: '#FFF',
        marginTop: 5,
      },
      socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 40,
      },
      aboutScreenContentContainer: {
        flex: 1,
        padding: 30,
        backgroundColor: '#FFFFFF',
      },
      aboutScreenTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
      },
      aboutScreenSubtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginBottom: 10,
      },
      aboutScreenParagraph: {
        fontSize: 18,
        color: '#000',
        lineHeight: 24,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
      },
      addButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      deleteButton: {
        backgroundColor: '#FF5722',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
});