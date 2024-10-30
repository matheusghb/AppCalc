import React from 'react';
import { View, Text, TextInput } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function IMC() {
  return (
    <View style={HomeStyles.container}>
      <Text>Esta é a Tela Sobre!</Text>
      <TextInput style={HomeStyles.Input} placeholder='Teste' value={text}/>
    </View>
  );
}
