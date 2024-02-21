import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import withGradient from './gradient';
import axios from 'axios';
import styles from './styles';

const FAQScreen = () => {
  const [showInputFields, setShowInputFields] = useState(false);
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const handleSendQuestion = async () => {
    try {
      // Make POST request to your backend API
      await axios.post('http://localhost:3000/api/questions', {
        name,
        question
      });
      setName('');
      setQuestion('');
      setShowInputFields(false);
    } catch (error) {
      console.error('Error sending question:', error);
    }
  };

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
      {!showInputFields ? (
        <TouchableOpacity style={styles.messageButton} onPress={() => setShowInputFields(true)}>
          <Text style={styles.messageButtonText}>Send a Question</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.inputField}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Question"
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendQuestion}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default withGradient(FAQScreen);