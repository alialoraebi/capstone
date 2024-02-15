import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

//import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; // Make sure you have these icons installed


const SettingScreen = () => {
    const navigation = useNavigation();



  return (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>SETTINGS</Text>
      </View>
    </LinearGradient>
  );
};
export default SettingScreen;