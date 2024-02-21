import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import withGradient from './gradient';

const mockMenuItems = [
  { id: '1', category: 'Appetizer', name: 'Soup', price: '$4' },
  { id: '2', category: 'Appetizer', name: 'Bread', price: '$2' },
];

const AiConfig = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [newItem, setNewItem] = useState({ category: '', name: '', price: '' });
    const [menuItems, setMenuItems] = useState(mockMenuItems);

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSelectItem = (id) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(id)) {
      newSelectedItems.delete(id);
    } else {
      newSelectedItems.add(id);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleAddNewItem = () => {
    if (newItem.category && newItem.name && newItem.price) {
      setMenuItems([
        ...menuItems,
        {
          id: String(menuItems.length + 1), 
          category: newItem.category,
          name: newItem.name,
          price: `$${newItem.price}`,
        },
      ]);
      setNewItem({ category: '', name: '', price: '' });
    } else {
      console.log('Please fill all fields');
    }
  };

  const handleDeleteSelected = () => {
    const newMenuItems = menuItems.filter(item => !selectedItems.has(item.id));
    setMenuItems(newMenuItems);
    setSelectedItems(new Set());
  };

  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      {editMode && (
        <TouchableOpacity onPress={() => handleSelectItem(item.id)}>
          <Text>{selectedItems.has(item.id) ? '🔘' : '⚪️'}</Text>
        </TouchableOpacity>
      )}
      {editMode ? (
        <>
          <TextInput
            style={styles.menuItemInput}
            value={item.name}
            onChangeText={text => handleEditItem('name', item.id, text)}
          />
          <TextInput
            style={styles.menuItemInput}
            value={item.price.replace('$', '')}
            onChangeText={text => handleEditItem('price', item.id, text)}
            keyboardType="numeric"
          />
        </>
      ) : (
        <>
          <Text style={styles.menuItemText}>{item.category}</Text>
          <Text style={styles.menuItemText}>{item.name}</Text>
          <Text style={styles.menuItemText}>{item.price}</Text>
        </>
      )}
    </View>
  );

  const handleEditItem = (field, id, value) => {
    const updatedItems = menuItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: field === 'price' ? `$${value}` : value };
      }
      return item;
    });
    setMenuItems(updatedItems);
  };

  return (
    <ScrollView style={styles.AIConfigContainer}>
      <View style={styles.AIConfigHeader}>
        <Text style={styles.AIConfigHeaderTitle}>AI Configuration</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => setEditMode(false)}><Text style={styles.headerActionText}>View</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setEditMode(true)}><Text style={styles.headerActionText}>Edit</Text></TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subTitle}>Name: "ABC Restaurant"</Text>
      <Text style={styles.subTitle}>Hours: "9am - 10pm"</Text>
      <Text style={styles.menuTitle}>Menu Items:</Text>
      {editMode && (
        <View style={styles.actionContainer}>
          <TextInput
            style={styles.input}
            value={newItem.category}
            onChangeText={(text) => setNewItem({ ...newItem, category: text })}
            placeholder="Category"
          />
          <TextInput
            style={styles.input}
            value={newItem.name}
            onChangeText={(text) => setNewItem({ ...newItem, name: text })}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            value={newItem.price}
            onChangeText={(text) => setNewItem({ ...newItem, price: text })}
            placeholder="Price"
            keyboardType="numeric"
          />
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.AIConfigAddButton} onPress={handleAddNewItem}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AIConfigDeleteButton} onPress={handleDeleteSelected}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </ScrollView>
  );
};

export default withGradient(AiConfig);
