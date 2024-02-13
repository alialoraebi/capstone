import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

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
export default HomeScreen;