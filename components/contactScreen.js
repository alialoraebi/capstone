import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import withGradient from './gradient';
import axios from 'axios';
import styles from './styles';

const contactScreen = () => {
  const [showInputFields, setShowInputFields] = useState(false);
  const [phone, setPhone] = useState('');
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
    <View style={styles.contactScreenContainer}>
      <Text style={styles.contactTitle}>Contact Us</Text>
        <View style={styles.contactInputContainer}>
          <TextInput
            style={styles.contactInput}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
           <TextInput
            style={styles.contactInput}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.queContactInput}
            placeholder="Question"
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendQuestion}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default withGradient(contactScreen);