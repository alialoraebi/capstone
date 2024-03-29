import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import withGradient from './gradient';
import axios from 'axios'; 
/*
const categories = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];
const names = ['Soup', 'Bread', 'Steak', 'Pasta', 'Ice Cream', 'Coffee', 'Tea', 'Salad', 'Burger', 'Pizza'];
const prices = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20'];

const mockMenuItems = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  category: categories[Math.floor(Math.random() * categories.length)],
  name: names[Math.floor(Math.random() * names.length)],
  price: `$${prices[Math.floor(Math.random() * prices.length)]}`,
}));*/

const AiConfig = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [newItem, setNewItem] = useState({ category: '', name: '', price: '' });
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantHours, setRestaurantHours] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');

  useEffect(() => {
      fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/showDishes');
      const formattedMenuItems = response.data.dishes.map(item => ({
        id: item._id,
        category: item.category,
        name: item.name,
        price: item.price,
      }));
      setMenuItems(formattedMenuItems);
      console.log('Menu items:', formattedMenuItems);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };
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

  const handleAddNewItem = async () => {
    if (newItem.category && newItem.name && newItem.price) {
      try {
        const response = await axios.post('http://localhost:3000/addDish', {
          category: newItem.category,
          name: newItem.name,
          price: parseInt(newItem.price),
        });
  
        console.log(response.data.message); // Log the response message
        // Optionally, you can handle success response here
  
        // Clear the newItem state after successfully adding the dish
        setNewItem({ category: '', name: '', price: '' });
      } catch (error) {
        console.error('Error adding dish:', error);
        // Optionally, you can handle error response here
      }
    } else {
      console.log('Please fill all fields');
    }
  };

  const handleDeleteSelected = async () => {
    try {
      // Iterate over the selected items
      for (const id of selectedItems) {
        // Send a DELETE request for each selected item
        await axios.delete(`http://localhost:3000/deleteDish/${id}`);
      }
  
      // Clear the selected items state after successful deletion
      setSelectedItems(new Set());
    } catch (error) {
      console.error('Error deleting dishes:', error);
      // Optionally, you can handle error response here
    }
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

            onChangeText={text => handleEditItem('price', item.id, text)}
            keyboardType="numeric"
          />
        </>
      ) : (
        <>
          <Text style={styles.menuItemText}>{item.category}</Text>
          <Text style={styles.menuItemText}>{item.name}</Text>
          <Text style={styles.menuItemText}>${item.price}</Text>
        </>
      )}
      
    </View>
    
  );

  const handleEditItem = async (field, id, value) => {
   value = parseInt(value);
    try {
      // Make a PUT request to update the dish on the server
      await axios.put(`http://localhost:3000/updateDishPrice/${id}`, {
        [field]: value // Send the updated field (name or price) to the server
      });
      console.log('Dish updated successfully');
    } catch (error) {
      console.error('Error updating dish:', error);
      // Optionally, you can handle the error here
    }
  };

  return (
    <ScrollView style={styles.AIConfigContainer}>
      <View style={styles.AIConfigHeader}>
        <Text style={styles.AIConfigHeaderTitle}>AI Configuration</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => setEditMode(false)}><Text style={styles.headerActionText}>View</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setEditMode(true)}><Text style={styles.headerActionText}>Edit</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setEditMode(false)}><Text style={styles.headerActionText}>Save</Text></TouchableOpacity>

        </View> 
      </View>
      <Text style={styles.subTitle}>Name: {restaurantName}</Text>
      <Text style={styles.subTitle}>Hours: {restaurantHours}</Text>
      <Text style={styles.subTitle}>Location: {restaurantLocation}</Text>
      <Text style={styles.menuTitle}>{editMode ? "Change Info:" : "Menu Items:"}</Text>
      {editMode && (
        <View style={styles.actionContainer}>
          <TextInput
            style={styles.input}
            value={restaurantName}
            onChangeText={setRestaurantName}
            placeholder="Restaurant Name"
          />
          <TextInput
            style={styles.input}
            value={restaurantHours}
            onChangeText={setRestaurantHours}
            placeholder="Restaurant Hours"
          />
          <TextInput
            style={styles.input}
            value={restaurantLocation}
            onChangeText={setRestaurantLocation}
            placeholder="Restaurant Location"
          />
          <Text style={styles.menuTitle}>Add New Item:</Text>
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