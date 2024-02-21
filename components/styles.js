// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main Screens
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
    // Login Screen
    loginContainer: {
      margin: 40,
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
      margin: 20,
    },
    loginTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFF',
      alignItems: 'center',
      margin: 20,
    },
    loginInput: {
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
    // Home Screen
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
    // About Screen
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
      paddingTop: 20,
    },
    aboutScreenSubtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 15,
      marginBottom: 10,
    },
    aboutScreenParagraph: {
      fontSize: 18,
      color: '#000',
      lineHeight: 24,
      marginBottom: 10,
    },
    //AI Configuration Screen
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
    // Settings Screen
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
      marginBottom: 30,
    },
    settingsContainer: {
      paddingTop: 50,
      padding: 25,
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
    //AI Configuration Screen
    AIConfigContainer: {
      flex: 1,
      margin: 20,
      marginTop: 60,
    },
    AIConfigHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#7D3C98',
      marginBottom: 40,
    },
    AIConfigHeaderTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerActions: {
      flexDirection: 'row',
    },
    headerActionText: {
      color: 'white',
      marginHorizontal: 10,
    },
    subTitle: {
      fontSize: 16,
      marginVertical: 5,
      marginLeft: 10,
      color: 'white',
    },
    menuTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 10,
      color: '#E8D8C4',

    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#B7C9F2',
    },
    menuItemText: {
      fontSize: 16,
      color: 'white',
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      paddingHorizontal: 20,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
    },
    AIConfigAddButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    AIConfigDeleteButton: {
      backgroundColor: '#FF5722',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    //FAQ Screen
    FAQScreencontainer: {
      flex: 1,
      padding: 20,
    },
    FAQtitle: {
      paddingTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#600060', 
      alignSelf: 'center',
      marginVertical: 10,
    },
    FAQheader: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#600060', 
      marginBottom: 10,
    },
    FAQsubHeader: {
      fontSize: 16,
      color: '#600060', 
      marginBottom: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      paddingBottom: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
      borderRadius: 20,
      backgroundColor: '#F0F0F0',
    },
    searchBar: {
      flex: 1,
      padding: 10,
      fontSize: 16,
      borderRadius: 20, 
      color: '#333', 
    },
    faqContainer: {
      marginBottom: 20,  
    },
    faqItem: {
      marginBottom: 20, 
    },
    question: {
      fontWeight: 'bold',
      fontSize: 18, 
      color: '#800080', 
      marginBottom: 5, 
    },
    answer: {
      fontSize: 16,
      color: '#333', 
      lineHeight: 24,
    },
    messageButton: {
      backgroundColor: '#4B0082', 
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 20,
    },
    messageButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    inputFieldsContainer: {
      marginTop: 20,
    },
    inputField: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 15,
    },
    sendButton: {
      backgroundColor: '#4B0082',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendButtonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },

});