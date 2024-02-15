import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const AboutScreen = () => {
  return (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
    <ScrollView style={styles.container}>
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
        {/* You would replace these names with the names of your team members */}
        <Text style={styles.paragraph}>Alvaro Aguirre Meza</Text>
        <Text style={styles.paragraph}>Kaariish Parameswaran</Text>
        <Text style={styles.paragraph}>Amir Yektajoo</Text>
        <Text style={styles.paragraph}>Ali Al Aoraebi</Text>
        <Text style={styles.paragraph}>Samuel Ntambwe</Text>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7D3C98', // or any color you want from the gradient
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 4,
  },
});

export default AboutScreen;