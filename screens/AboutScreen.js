import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

export default function IMC() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [imc, setImc] = React.useState(null);

  const CalcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      const imcCalc = pesoNum / (alturaNum * alturaNum); // Correção na fórmula
      setImc(imcCalc); // Atualiza o estado com o valor calculado do IMC
      console.log(imcCalc, alturaNum, pesoNum);
    } else {
      alert('Preencha os campos corretamente.');
    }
  }

  return (
    <View style={HomeStyles.container}>
      <Text>Calculo de IMC</Text>
      <TextInput 
        style={HomeStyles.input}
        value={peso}
        onChangeText={setPeso}
        placeholder='Peso (kg):'
        keyboardType='numeric'
      />
      <TextInput
        style={HomeStyles.input}
        value={altura}
        onChangeText={setAltura}
        placeholder='Altura (m):' // Certifique-se de que a altura está em metros
        keyboardType='numeric'
      />
      <TouchableOpacity style={HomeStyles.button} onPress={CalcularIMC}>
        <Text style={HomeStyles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text>Seu IMC é: {imc}</Text> 
    </View>
  );
}