import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

export default function Medidas() {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Conversor de moeda</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={HomeStyles.buttonText}>Calculadora IMD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Moeda')}>
      <Text style={HomeStyles.buttonText}>Conversor de Moeda</Text>
      </TouchableOpacity>
    </View>
  );
};