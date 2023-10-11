import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {

  const [buses, setBuses] = useState([]);
  const [busInfo, setBusInfo] = useState({ empresa: '', prefixo: '', chassi: '', ano: '', placa: '', modelo: '', });


  const addBus = () => {

    setBuses([...buses, busInfo]);
    setBusInfo({ empresa: '', prefixo: '', chassi: '', ano: '', placa: '', modelo: '' });

  };

  return (

    <View style = {styles.container}>

      <Text style = {styles.header}>Onibus Aspectverso</Text>

      <TextInput

        style = {styles.input}
        placeholder = "Empresa"
        value = {busInfo.empresa}
        onChangeText = {text => setBusInfo({ ...busInfo, empresa: text })}

      />

      <TextInput 

        style = {styles.input}
        placeholder = "Prefixo"
        value = {busInfo.prefixo}
        onChangeText = {text => setBusInfo({ ...busInfo, prefixo: text })}

      />

      <TextInput
      
        style = {styles.input}
        placeholder = "Modelo"
        value = {busInfo.modelo}
        onChangeText = {text => setBusInfo({ ...busInfo, modelo: text })}

      />

      <TextInput

        style = {styles.input}
        placeholder = "Chassi"
        value = {busInfo.chassi}
        onChangeText = {text => setBusInfo({ ...busInfo, chassi: text })}

      />

      <TextInput

        style = {styles.input}
        placeholder = "Ano"
        value = {busInfo.ano}
        onChangeText = {text => setBusInfo({ ...busInfo, ano: text })}

      />

      <TextInput

        style = {styles.input}
        placeholder = "Placa"
        value = {busInfo.placa}
        onChangeText = {text => setBusInfo({ ...busInfo, placa: text })}

      />

      <Button title = "Adicionar Ônibus" onPress = {addBus} />

      <FlatList

        data = {buses}
        keyExtractor = {(item, index) => index.toString()}
        renderItem = {({ item }) => (

          <View style = {styles.busItem}>

            <Text style = {styles.busItemText}>Empresa: {item.empresa}</Text>
            <Text style = {styles.busItemText}>Prefixo: {item.prefixo}</Text>
            <Text style = {styles.busItemText}>Modelo: {item.modelo}</Text>
            <Text style = {styles.busItemText}>Chassi: {item.chassi}</Text>
            <Text style = {styles.busItemText}>Ano: {item.ano}</Text>
            <Text style = {styles.busItemText}>Placa: {item.placa}</Text>
            

          </View>

        )}

      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',

  },

  header: {

    fontSize: 28,
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',

  },

  input: {

    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#fff',

  },

  busItem: {

    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',

  },

  busItemText: {

    fontSize: 16,
    marginBottom: 4,

  },

});
