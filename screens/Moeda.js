import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import HomeStyles from '../styles/HomeStyles.js';

export default function Moeda() {
  const [SelectedItems, setSelectedItems] = React.useState({
    real: false,
    dolar: false,
    iene: false,
    kwanza: false,
    euro: false,
    peso: false,
  });
  const [con, setCon] = React.useState({
    real: false,
    dolar: false,
    iene: false,
    kwanza: false,
    euro: false,
    peso: false,
  })

   const troca = (item) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
   };

   const troca2 = (item) => {
    setCon((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
   };

  return (
    <View>
      <CheckBox
        value={SelectedItems.real}
        onValueChange={() => troca('real')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Real</Text>
      <CheckBox
        value={SelectedItems.dolar}
        onValueChange={() => troca('dolar')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Dolar</Text>
      <CheckBox
        value={SelectedItems.iene}
        onValueChange={() => troca('iene')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Iêne</Text>
      <CheckBox
        value={SelectedItems.kwanza}
        onValueChange={() => troca('kwanza')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Kwanza</Text>
      <CheckBox
        value={SelectedItems.euro}
        onValueChange={() => troca('euro')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Euro</Text>
      <CheckBox
        value={SelectedItems.peso}
        onValueChange={() => troca('peso')}
        style={HomeStyles.checkbox}
      />
      <Text style={HomeStyles.text1}>Peso</Text>
      <CheckBox
        value={con.real}
        onValueChange={() => troca2('real')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Real</Text>
      <CheckBox
        value={con.dolar}
        onValueChange={() => troca2('dolar')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Dolar</Text>
      <CheckBox
        value={con.iene}
        onValueChange={() => troca2('iene')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Iêne</Text>
      <CheckBox
        value={con.kwanza}
        onValueChange={() => troca2('kwanza')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Kwanza</Text>
      <CheckBox
        value={con.euro}
        onValueChange={() => troca2('euro')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Euro</Text>
      <CheckBox
        value={con.peso}
        onValueChange={() => troca2('peso')}
        style={HomeStyles.checkbox2}
      />
      <Text style={HomeStyles.text2}>Peso</Text>
    </View>
  );
};