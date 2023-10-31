import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import NomeGeradoScreen from './src/NomeGeradoScreen';
import characterData from './characters.json';

const Stack = createStackNavigator();

const App = () => {

  const characterList = characterData.characters;

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName = "Home">

        <Stack.Screen name = "Home">

          {props => <HomeScreen {...props} characterList = {characterList} />}

        </Stack.Screen>

        <Stack.Screen name = "NomeGerado" component={NomeGeradoScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};

export default App;

