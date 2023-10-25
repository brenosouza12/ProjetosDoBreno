import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Formulario() {

  const navigation = useNavigation();
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [cidade, setCidade] = React.useState('');

  const handleResetNavigation = () => {

    navigation.reset({

      index: 0,
      routes: [{ name: 'Formulario' }],

    });

  };

  return (

    <View style = {styles.container}>
      <Text style = {styles.title}>Formulário</Text>
      <TextInput
        style = {styles.input}
        placeholder = "Nome"
        value = {nome}
        onChangeText = {(text) => setNome(text)}
      />
      <TextInput
        style = {styles.input}
        placeholder = "Idade"
        value = {idade}
        onChangeText = {(text) => setIdade(text)}
        keyboardType = "numeric"
      />
      <TextInput
        style = {styles.input}
        placeholder = "Cidade"
        value = {cidade}
        onChangeText = {(text) => setCidade(text)}
      />
      <Button
        title = "Ver Detalhes"
        onPress = {() =>
          navigation.navigate('DetalhesPessoa', { nome, idade, cidade })
        }
      />
    </View>
  );
}

function DetalhesPessoa({ route }) {
  const { nome, idade, cidade } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Pessoa</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="DetalhesPessoa" component={DetalhesPessoa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
};
