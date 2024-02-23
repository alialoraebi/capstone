import React from 'react';
import { View, Text } from 'react-native';
import withGradient from './gradient';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeHeaderContainer}>
        <Text style={styles.homeHeaderTitle}>Home</Text>
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
    </View>
  );
};

export default withGradient(HomeScreen);
