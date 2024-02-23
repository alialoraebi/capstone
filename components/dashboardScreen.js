import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import withGradient from './gradient';

const StatisticsScreen = () => {
    // Get current date
    const currentDate = new Date();
    // Format date to 'day/month/year' format
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const data = {
        
        numberOfCalls: 48,
        averageCallTime: '1 min 32 sec',
        missedCalls: 0,
        callsForwarded: 4,
        lastCallSummary: {
          number: '+1-647-050-4093',
          message: 'Hi, I wanted to know what time your operating hours are.',
          response: 'We are open Monday to Friday from 10AM to 10PM, and Saturday from 12PM to 11PM. We are closed on Sundays.'
        }
    };

    return (
        <View style={styles.dateContainer}>
            {/* Circle */}
            <View style={styles.dateCircle}>
                <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            
            <View style={styles.dashboardStatsContainer}>
        <View style={styles.dashboardStatsBox}>
          <Text style={styles.dashboardStatsTitle}>NUMBER OF CALLS:</Text>
          <Text style={styles.dashboardStatsValue}>{data.numberOfCalls}</Text>
        </View>
        <View style={styles.dashboardStatsBox}>
          <Text style={styles.dashboardStatsTitle}>AVG CALL TIME:</Text>
          <Text style={styles.dashboardStatsValue}>{data.averageCallTime}</Text>
        </View>
        <View style={styles.dashboardStatsBox}>
          <Text style={styles.dashboardStatsTitle}>MISSED CALLS:</Text>
          <Text style={styles.dashboardStatsValue}>{data.missedCalls}</Text>
        </View>
        <View style={styles.dashboardStatsBox}>
          <Text style={styles.dashboardStatsTitle}>CALLS FORWARDED TO LIVE AGENT:</Text>
          <Text style={styles.dashboardStatsValue}>{data.callsForwarded}</Text>
        </View>
      </View>
      <Text style={styles.lastCallSummaryTitle}>LAST CALL SUMMARY</Text>
      <View style={styles.lastCallSummary}>
        <Text style={styles.lastCallNumber}>{data.lastCallSummary.number}</Text>
        <Text style={styles.lastCallMessage}>{data.lastCallSummary.message}</Text>
        <Text style={styles.lastCallResponse}>{data.lastCallSummary.response}</Text>
      </View>
    </View>
  );
};


export default withGradient(StatisticsScreen);