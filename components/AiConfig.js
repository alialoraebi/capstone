import React from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList } from 'react-native';
import styles from './styles';
import withGradient from './gradient';

const mockMenuItems = [
    { id: '1', category: 'Appetizer', name: 'Soup', price: '$4' },
    { id: '2', category: 'Appetizer', name: 'Bread', price: '$2' },
    // ... other menu items
  ];


const AiConfig = (props) => {

    const handleAdd = () => {
        // Logic for adding item
    };

    const handleDelete = () => {
        // Logic for deleting item
    };

    return (
        <View style={styles.AIConfigContainer}>
          <View style={styles.AIConfigHeader}>
            <Text style={styles.AIConfigHeaderTitle}>AI Configuration</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity><Text style={styles.headerActionText}>View</Text></TouchableOpacity>
              <TouchableOpacity><Text style={styles.headerActionText}>Edit</Text></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.subTitle}>Name: "ABC Restaurant"</Text>
          <Text style={styles.subTitle}>Hours: "9am - 10pm"</Text>
          <Text style={styles.menuTitle}>Menu Items:</Text>
          <FlatList
            data={mockMenuItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <Text style={styles.menuItemText}>{item.category}</Text>
                <Text style={styles.menuItemText}>{item.name}</Text>
                <Text style={styles.menuItemText}>{item.price}</Text>
              </View>
            )}
          />
        </View>
      );
};

export default withGradient(AiConfig);