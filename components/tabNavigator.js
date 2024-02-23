import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import DashboardScreen from './dashboardScreen';
import ContactScreen from './contactScreen';
import HomeScreen from './homeScreen'; 
import SettingsStackNavigator from './SettingsStackNav';
import { TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Dashboard') {
            iconName = 'bar-chart';
          } else if (route.name === 'Settings') {
            iconName = 'cogs';
          } else if (route.name === 'Contact') {
            iconName = 'envelope-o';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7D3C98',
        tabBarInactiveTintColor: 'gray',
        tabBarButton: (props) => (
          <TouchableOpacity {...props} onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            props.onPress();
          }}/>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default MyTabs;