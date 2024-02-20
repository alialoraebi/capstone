import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import withGradient from './gradient';
import styles from './styles';

const StatisticsScreen = (props) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
            <Text style={styles.statsText}>NUMBER OF CALLS</Text>
          <Text style={styles.statsNumber}>3</Text>
          
        </View>
        <View style={styles.statsBox}>
            <Text style={styles.statsText}>MISSED CALLS</Text>
            <Text style={styles.statsNumber}>12</Text>
          
        </View>
        <View style={styles.statsBox}>
            <Text style={styles.statsText}>AVERAGE CALL TIME</Text>
          <Text style={styles.statsNumber}>1 MIN 30 SEC</Text>
          
        </View>
        <View style={styles.statsBox}>
            <Text style={styles.statsText}>CALLS FORWARDED TO LIVE AGENTS</Text>
          <Text style={styles.statsNumber}>3</Text>
          
        </View>
      </View>
    </ScrollView>
    );
};

export default withGradient(StatisticsScreen);