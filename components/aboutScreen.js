// AboutScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import withGradient from './gradient';
import styles from './styles';

const AboutScreen = (props) => {
  return (
      <View style={styles.aboutScreenContentContainer}>
        <Text style={styles.aboutScreenTitle}>About Us</Text>
        <Text style={styles.aboutScreenSubtitle}>Purpose:</Text>
        <Text style={styles.aboutScreenParagraph}>
          The company assists businesses in providing 100% accurate customer support through an 
          automated answering system. The company helps restaurants with their customer support 
          through phone assistance by integrating a software to the restaurants phone number. When 
          a customer calls the restaurant the system answers their call and answers all their 
          questions and concerns and assists them with reservations and more. The software makes 
          sure no calls go unanswered and that there is more time for employees to focus on more 
          important tasks rather than worry about answering calls.
        </Text>

        <Text style={styles.aboutScreenSubtitle}>Team:</Text>
        <Text style={styles.aboutScreenParagraph}>Alvaro Aguirre Meza</Text>
        <Text style={styles.aboutScreenParagraph}>Kaarish Parameswaran</Text>
        <Text style={styles.aboutScreenParagraph}>Amir Yektajoo</Text>
        <Text style={styles.aboutScreenParagraph}>Ali Al Aoraebi</Text>
        <Text style={styles.aboutScreenParagraph}>Samuel Ntambwe</Text>
      </View>
  );
};

export default withGradient(AboutScreen);