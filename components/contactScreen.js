import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
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

  const handlePhonePress = () => {
    Alert.alert(
      'Dial Number',
      'Do you want to call 1-800-123-4567?',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'OK', onPress: () => Linking.openURL(`tel:1-800-123-4567`)},
      ],
      { cancelable: false }
    );
  };

  const handleEmailPress = () => {
    Alert.alert(
      'Send Email',
      'Do you want to send an email to info@aicallassist.ca?',
      [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {text: 'OK', onPress: () => Linking.openURL('mailto:info@aicallassist.ca')},
      ],
      { cancelable: false }
    );
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

          <Text style={styles.contactInfo} onPress={handlePhonePress}>Phone: 1-800-123-4567</Text>
          <Text style={styles.contactInfo} onPress={handleEmailPress}>Email: info@aicallassist.ca</Text>
        </View>

    </View>
  );
};

export default withGradient(contactScreen);