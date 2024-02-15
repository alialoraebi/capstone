// AboutScreen.js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import withGradient from './gradient';
import styles from './styles';

const AboutScreen = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AI CALL ASSIST</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>ABOUT US</Text>
        <Text style={styles.subtitle}>PURPOSE:</Text>
        <Text style={styles.paragraph}>
          The company assists businesses in providing 100% accurate customer support through an 
          automated answering system. The company helps restaurants with their customer support 
          through phone assistance by integrating a software to the restaurants phone number. When 
          a customer calls the restaurant the system answers their call and answers all their 
          questions and concerns and assists them with reservations and more. The software makes 
          sure no calls go unanswered and that there is more time for employees to focus on more 
          important tasks rather than worry about answering calls.
        </Text>

        <Text style={styles.subtitle}>TEAM:</Text>
        <Text style={styles.paragraph}>Alvaro Aguirre Meza</Text>
        <Text style={styles.paragraph}>Kaariish Parameswaran</Text>
        <Text style={styles.paragraph}>Amir Yektajoo</Text>
        <Text style={styles.paragraph}>Ali Al Aoraebi</Text>
        <Text style={styles.paragraph}>Samuel Ntambwe</Text>
      </View>
    </ScrollView>
  );
};



export default withGradient(AboutScreen);
