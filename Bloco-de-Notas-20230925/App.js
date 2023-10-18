import React, { useState } from "react";
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from "react-native";

export default function App() {

  const [nota, setNota] = useState('');
  const [listaDeNotas, setListaDeNotas] = useState([]);
  const [notaSelecionada, setNotaSelecionada] = useState(null);


  const salvarNota = () => {
    if (nota) {

      if (notaSelecionada !== null) {
      
        const novasNotas = [...listaDeNotas];
        novasNotas[notaSelecionada] = nota;
        setListaDeNotas(novasNotas);
        setNotaSelecionada(null);

      } else {
     
        setListaDeNotas([...listaDeNotas, nota]);

      }

      setNota('');

    }

  };

  const editarNota = (index) => {

    setNota(listaDeNotas[index]);
    setNotaSelecionada(index); 

  };

  const apagarNota = (index) => {

    const novasNotas = [...listaDeNotas];
    novasNotas.splice(index, 1);
    setListaDeNotas(novasNotas);

  };

  return (

    <View style = {styles.container}>

      <Text style = {styles.titulo}>Bloco de Notas</Text>

      <TextInput

        style = {styles.input}
        placeholder = 'Digite a sua nota...'
        value = {nota}
        onChangeText = {(texto) => setNota(texto)}

      />

      <View style={styles.botoesContainer}>

        <Button title='Salvar Nota' onPress={salvarNota} />
        <Button title='Cancelar' onPress={() => { setNotaSelecionada(null); setNota(''); }} />

      </View>

      <ScrollView style={styles.containerNotas}>

        {listaDeNotas.map((n, index) => (

          <View key={index} style={styles.itemNotaContainer}>

            <Text style={styles.itemNota}>{n}</Text>

            <View style={styles.botoesEditarApagar}>

              <Button title='Editar' onPress={() => editarNota(index)} />
              <Button title='Apagar' onPress={() => apagarNota(index)} />

            </View>

          </View>

        ))}

      </ScrollView>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  input: {

    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,

  },

  containerNotas: {

    width: '80%',
    marginTop: 20,

  },

  itemNotaContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },

  itemNota: {

    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,

  },

  botoesEditarApagar: {

    flexDirection: 'row',

  },

  botoesContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,

  },

  titulo: {

    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  
});
