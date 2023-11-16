import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleLogin = () => {

    if (nomeUsuario === 'admin' && senha === '123') {

      setMensagem('Login efetuado!');

    } else if (nomeUsuario !== 'admin' && senha !== '123') {

      setMensagem('Nome de usuário e senha incorretos!');

    } else if (nomeUsuario !== 'admin') {

      setMensagem('Nome de usuário incorreto!');

    } else {

      setMensagem('Senha incorreta!');

    }

  };

  return (

    <View style = {styles.container}>

      <TextInput

        style = {styles.input}
        placeholder = "Digite o nome de usuário"
        value = {nomeUsuario}
        onChangeText = {(texto) => setNomeUsuario(texto)}

      />

      <TextInput

        style = {styles.input}
        placeholder = "Digite a senha"
        secureTextEntry
        value = {senha}
        onChangeText = {(texto) => setSenha(texto)}

      />

      <Button title = "Login" onPress = {handleLogin} />
      <Text style = {styles.mensagem}>{mensagem}</Text>

    </View>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },

  input: {

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',

  },

  mensagem: {

    marginTop: 10,
    color: 'red',

  },
  
});

export default App;
