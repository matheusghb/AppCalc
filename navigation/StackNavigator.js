import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import IMC from '../screens/AboutScreen.js';
import Moeda from '../screens/Moeda.js';
import Medidas from '../screens/Medidas.js'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={IMC} />
      <Stack.Screen name="Moeda" component={Moeda} />
      <Stack.Screen name='Medidas' component={Medidas} />
    </Stack.Navigator>
  );
};