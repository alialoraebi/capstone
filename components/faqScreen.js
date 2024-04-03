import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import withGradient from './gradient';
import styles from './styles';

const FAQScreen = () => {

  return (
    <View style={styles.FAQScreencontainer}>
      <Text style={styles.FAQtitle}>FAQ</Text>
      <Text style={styles.FAQheader}>We’re here to help you with anything and everything on AI Call Assist</Text>
      <Text style={styles.FAQsubHeader}>
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
    </View>
  );
};

export default FAQScreen;