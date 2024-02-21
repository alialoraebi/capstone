// FAQScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import withGradient from './gradient';

const FAQScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
      <Text style={styles.header}>We’re here to help you with anything and everything on AI Call Assist</Text>
      <Text style={styles.subHeader}>
        At AI Call Assist we expect at a day's start is you, better and happier than yesterday. We have got you covered share your concern or check our frequently asked questions listed below.
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>
      <ScrollView style={styles.faqContainer}>
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: What is an AI Call Assist system?</Text>
          <Text style={styles.answer}>A: An AI Call Assist system is a technology that uses artificial intelligence to help manage and handle incoming calls, 
          assisting callers with queries, directing them to the right department or 
          information, and providing support through automated processes.</Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: How does AI Call Assist work? </Text>
          <Text style={styles.answer}>A: It operates through advanced algorithms 
          and natural language processing to understand caller inquiries. It can 
          provide pre-recorded or synthesized responses, route calls to appropriate 
          agents, or execute automated tasks based on the conversation.</Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>Q: Can an AI Call Assist system handle complex queries?</Text>
          <Text style={styles.answer}>A: Yes, modern AI Call Assist systems are equipped with advanced NLP and 
          machine learning, enabling them to handle a wide range of queries, including 
          complex ones. However, there might be instances where it needs to escalate 
          to a human agent for certain nuanced or intricate issues.</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Send a Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
  },
  title: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#800080', 
    alignSelf: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080', 
    marginBottom: 10,
  },
  subHeader: {
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
});

export default withGradient(FAQScreen);
