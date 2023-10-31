import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation, characterList }) => {

  const generateRandomName = () => {

    const randomIndex = Math.floor(Math.random() * characterList.length);
    const randomName = characterList[randomIndex];
    navigation.navigate('NomeGerado', { nome: randomName });

  };

  return (

    <View style = {styles.container}>

      <Text style = {styles.title}>Gerador de Nomes de Personagens</Text>

      <Button title="Gerar Nome Aleatório" onPress = {generateRandomName} />

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

  title: {

    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,

  },
  
});

export default HomeScreen;
