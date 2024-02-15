import React from 'react';
import { SafeAreaView,ScrollView, View, TouchableOpacity,Text,TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Button } from 'react-native-paper';

//import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'; // Make sure you have these icons installed


const StatisticsScreen = () => {
   
    const handleAdd = () => {
        // Logic for adding item
    };

    const handleDelete = () => {
        // Logic for deleting item
    };

    return (
    <LinearGradient colors={['#7D3C98', '#7D3C98', '#FFFFFF']} style={styles.gradient}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>STATISTICS</Text>
    </View>
    <View>
    <TextInput
    placeholder="CATEGORY"
    placeholderTextColor="#FFF9"
    style={styles.input}
    />

    <TextInput
    placeholder="NAME"
    placeholderTextColor="#FFF9"
    style={styles.input}
    />

    <TextInput
    placeholder="PRICE"
    placeholderTextColor="#FFF9"
    style={styles.input}
    />

    </View>
    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                        <Text style={styles.buttonText}>DELETE</Text>
                    </TouchableOpacity>
                </View>
    </LinearGradient>
  );
};
export default StatisticsScreen;