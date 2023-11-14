import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LivroListScreen from './screens/LivroListScreen';

const Stack = createStackNavigator();

const App = () => {

    return(

       <NavigationContainer>

          <Stack.Navigator initialRouteName = 'LivroList'>

               <Stack.Screen name = 'LivroList' component = {LivroListScreen} options = { { title: 'Spectrum - Catalogo de Livros'}} />

          </Stack.Navigator>

       </NavigationContainer>

    )

}

export default App;