// SettingsStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './settingsScreen';
import AiConfig from './AiConfig';

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen name="AiConfig" component={AiConfig} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
