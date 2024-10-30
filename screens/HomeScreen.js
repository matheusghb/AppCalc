import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Conversor</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={HomeStyles.buttonText}>Calculadora IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Moeda')}>
      <Text style={HomeStyles.buttonText}>Conversor de Moeda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Medidas')}>
        <Text style={HomeStyles.buttonText}>Conversor de Medidas</Text>
      </TouchableOpacity>
    </View>
  );
};