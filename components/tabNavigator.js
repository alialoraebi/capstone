import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingScreen';
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen'; 
import AiConfig from './AiConfig';
import styles from './styles';
import e from 'cors';

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
          } else if (route.name === 'Statistics') {
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
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Contact" component={AboutScreen} options={{ headerShown: false }} />
    
    </Tab.Navigator>
  );
};

export default MyTabs;
