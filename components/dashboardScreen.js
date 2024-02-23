import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import withGradient from './gradient';

const StatisticsScreen = () => {
    
    return (
        <View style={styles.container}>
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
                <TouchableOpacity style={styles.addButton} /*onPress={handleAdd}*/>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} /*onPress={handleDelete}*/>
                    <Text style={styles.buttonText}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default withGradient(StatisticsScreen);