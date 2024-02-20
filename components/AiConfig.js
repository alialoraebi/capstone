import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles';
import withGradient from './gradient';


const AiConfig = (props) => {

    const handleAdd = () => {
        // Logic for adding item
    };

    const handleDelete = () => {
        // Logic for deleting item
    };

    return (
        <View style={styles.container}>

            <View>

                <TextInput
                    placeholder="CATEGORY"
                    placeholderTextColor="#Black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="NAME"
                    placeholderTextColor="Black"
                    style={styles.input}
                />

                <TextInput
                    placeholder="PRICE"
                    placeholderTextColor="#Black"
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
        </View>
    );
};

export default withGradient(AiConfig);