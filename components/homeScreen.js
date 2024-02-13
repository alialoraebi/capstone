import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; // Make sure you have these icons installed



const HomeScreen = () => {
    const handleHomePress = () => {
        console.log('Home button pressed');
        // Here you would navigate to the Home screen or refresh the home data
      };
    
      const handleStatisticsPress = () => {
        console.log('Statistics button pressed');
        // Here you would navigate to the Statistics screen or load statistics data
      };
    
      const handleSettingsPress = () => {
        console.log('Settings button pressed');
        // Here you would navigate to the
      };
      
      const handleContactUsPress = () => {
          console.log('Contact Us button pressed');
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>AI CALL ASSIST</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Statistics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>3</Text>
          <Text style={styles.statsText}>Active Calls</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>12</Text>
          <Text style={styles.statsText}>Total Calls</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>15%</Text>
          <Text style={styles.statsText}>System Health</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsNumber}>3</Text>
          <Text style={styles.statsText}>Unread Notification</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#7D3C98', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: 50,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 40,
  },
  statsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  statsBox: {
    backgroundColor: '#8E44AD', // Adjust the color as needed
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
});

export default HomeScreen;