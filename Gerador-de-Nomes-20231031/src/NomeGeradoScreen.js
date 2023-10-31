import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NomeGeradoScreen = ({ route }) => {

  const { nome } = route.params;

  return (

    <View style = {styles.container}>

      <Text style = {styles.nomeText}>Nome Gerado: {nome}</Text>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',

  },

  nomeText: {

    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

  },
  
});

export default NomeGeradoScreen;
