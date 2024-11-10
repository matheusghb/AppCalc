import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

export default function Moeda() {

  let [mini, setMini] = React.useState('real')
  let [mfin, setMfin] = React.useState('real')

  let [num, setNum] = React.useState('')
  let [nnum, setNnum] = React.useState('')

   const troca = (val) => {
    setMini(val)
    };

   const trocac = (valc) => {
    setMfin(valc)
   };

   const calc = (num) => {
    let cal = parseFloat(num)

    if (mini = 'real') {
      setNum(num)
    }
    if (mini = 'dolar') {
      let calr = (cal * 5.74)
      setNum(calr)
    }
    if (mini = 'iene') {
      let calr = (cal * 0.038)
      setNum(calr)
    }
    if (mini = 'kwanza') {
      let calr = (cal * 0.0063)
      setNum(calr)
    }
    if (mini = 'euro') {
      let calr = (cal * 6.14)
      setNum(calr)
    }
    if (mini = 'peso') {
      let calr = (cal * 0.0057)
      setNum(calr)
    }
    console.log(num)
    useEffect(() => {
      if (mfin = 'real') {
        setNnum(num)
      }
      if (mfin = 'dolar') {
        let calr = (cal * 0.17)
        setNnum(calr)
      }
      if (mfin = 'iene') {
        let calr = (cal * 26.6)
        setNnum(calr)
      }
      if (mfin = 'kwanza') {
        let calr = (cal * 159.03)
        setNnum(calr)
      }
      if (mfin = 'euro') {
        let calr = (cal * 0.16)
        setNnum(calr)
      }
      if (mfin = 'peso') {
        let calr = (cal * 174.57)
        setNnum(calr)
      }
    })

    alert(nnum)

   }

  return (
    <SafeAreaView>
        <View style={HomeStyles.container}>
          <Text style={st.texto}>{mini} para {mfin}</Text>
          <Text style={st.tex}>Real</Text>
          <Text style={st.tex}>Dólar</Text>
          <Text style={st.tex}>Iêne</Text>
          <Text style={st.tex}>Kwanza</Text>
          <Text style={st.tex}>Euro</Text>
          <Text style={st.tex}>Peso</Text>
          <TextInput
            style={HomeStyles.input}
            value={num}
            onChangeText={setNum}
            placeholder='Total da moeda inicial:'
            keyboardType='numeric'
          />
          <TouchableOpacity onPress={() => calc(num)}
            style={st.conf}>
              <Text>Confirmar</Text>
          </TouchableOpacity>
        </View>
        <View style={st.b2Container}>
          <TouchableOpacity
            onPress={() => trocac('real')}
            style={st.b2}
          />
          <TouchableOpacity
            onPress={() => trocac('dolar')}
            style={st.b2}
          />
          <TouchableOpacity
            onPress={() => trocac('iene')}
            style={st.b2}
          />
          <TouchableOpacity
            onPress={() => trocac('kwanza')}
            style={st.b2}
          />
          <TouchableOpacity
            onPress={() => trocac('euro')}
            style={st.b2}
          />
          <TouchableOpacity
            onPress={() => trocac('peso')}
            style={st.b2}
          />

          <TouchableOpacity
            onPress={() => troca('real')}
            style={st.b1}
          />
          <TouchableOpacity
            onPress={() => troca('dolar')}
            style={st.b1}
          />
          <TouchableOpacity
            onPress={() => troca('iene')}
            style={st.b1}
          />
          <TouchableOpacity
            style={st.b1}
            onPress={() => troca('kwanza')}
          />
          <TouchableOpacity
            onPress={() => troca('euro')}
            style={st.b1}
          />
          <TouchableOpacity
            onPress={() => troca('peso')}
            style={st.b1}
          />
        </View>
    </SafeAreaView>


  );
};
    const st = StyleSheet.create({
      texto: {
        flex: 2,
        fontSize: 40,
        fontWeight: 'bold',
        padding: 10,
      },
      tex: {
        flex: 2,
        fontSize: 20,
        padding: 5,
        marginBottom: 10,
        fontStyle: 'italic'
      },
      b1: {
        backgroundColor: '#3498db',
        padding: 10,
        margin: 13.4,
        borderRadius: 5,
        width: 10,
        height: 10,
        alignItems: 'center',
        flexDirection: 'column',
        bottom: 282,
        right: 110,
      },
      b2: {
        alignItems: 'center',
        backgroundColor: '#3498db',
        width: 10,
        height: 10,
        padding: 10,
        margin: 13.4,
        borderRadius: 5,
        flexDirection: 'column',
      },
      b1Container: {
        marginVertical: 10,
        bottom: 694,
      },
      b2Container: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginVertical: 10,
        bottom: 405,
        right: '44.4%',
      },
      conf: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 30,
        padding: 10,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#3498db',
      }
    })