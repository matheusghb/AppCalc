import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

const imc = '0'

export default function IMC() {
  const [peso, setPeso]  = React.useState('');
  const [altura, setAltura] = React.useState('')
  const [imc, setImc] =  React.useState(null)

  const CalcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      const imcCalc = pesoNum / (alturaNum * alturaNum);
    } else {
      alert('Preencha os campos corretamente.')
    }
  }

  return (
    <View style={HomeStyles.container}>
      <Text>Calculo de IMC</Text>
      <TextInput 
        style={HomeStyles.input}
        value={peso}
        onChangeText={setPeso}
        placeholder='Peso:'
        keyboardType='Numeric'
        />
        <TextInput
          style={HomeStyles.input}
          value={altura}
          onChangeText={setAltura}
          placeholder='Altura:'
          keyboardType='Numeric'
          />
          <TouchableOpacity style={HomeStyles.button}  onPress={CalcularIMC}>
            <Text style={HomeStyles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <Text>Seu IMC é: {imc}</Text> 
    </View>
  );
}
