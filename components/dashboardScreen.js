import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import withGradient from './gradient';

const StatisticsScreen = () => {
    // Get current date
    const currentDate = new Date();
    // Format date to 'day/month/year' format
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return (
        <View style={styles.dateContainer}>
            {/* Circle */}
            <View style={styles.dateCircle}>
                <Text style={styles.dateText}>{formattedDate}</Text>
            </View>
            
            {/* Grid layout for statistics */}
            <View style={styles.statsGrid}>
                {/* Number of Calls */}
                <View style={styles.statsCircle}>
                    <Text style={styles.statsTextDash}>NUMBER OF CALLS</Text>
                    <Text style={styles.statsTextDash}>3</Text>
                </View>

                {/* Average Call Time */}
                <View style={styles.statsCircle}>
                    <Text style={styles.statsTextDash}>AVERAGE CALL TIME</Text>
                    <Text style={styles.statsTextDash}>1 MIN 30 SEC</Text>
                </View>

                {/* Missed Calls */}
                <View style={styles.statsCircle}>
                    <Text style={styles.statsTextDash}>MISSED CALLS</Text>
                    <Text style={styles.statsTextDash}>5</Text>
                </View>

                {/* Calls Forwarded to Live Agent */}
                <View style={styles.statsCircle}>
                    <Text style={styles.statsTextDash}>CALLS FORWARDED TO LIVE AGENT</Text>
                    <Text style={styles.statsTextDash}>3</Text>
                </View>
            </View>

            {/* Big gray box at the bottom middle */}
            <View style={styles.bottomBox}>
                
                <View>
                    <Text style={styles.bottomTextLeft}>
                        +1-647-050-4093:<br></br>
                        HI, I WANTED TO KNOW WHAT TIME YOUR OPERATING 
                        HOURS ARE.
                    </Text>
                
                    <Text style={styles.bottomTextRight}>
                        AI CALL ASSIST:<br></br>
                        WE ARE OPEN MONDAY TO FRIDAY FROM 10AM TO 10PM, 
                        AND SATURDAY FROM 12PM TO 11PM. WE ARE CLOSED ON SUNDAY   
                    </Text>
                </View>
            </View>
        </View>
    );
};


export default withGradient(StatisticsScreen);