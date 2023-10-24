import React, { useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {

    const [nota1,setNota1] = useState('');
    const [nota2,setNota2] = useState('');
    const [nota3,setNota3] = useState('');
    const [nota4,setNota4] = useState('');

    const calcularMedia = () => {

        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);

        const media = (n1 + n2 + n3 + n4) / 4;

        navigation.navigate('Resultado', { media });

    }

    return (

        <View>

            <Text>Informe as 4 notas</Text>

            <TextInput

                style = {styles.input}
                placeholder = "Nota 1"
                onChangeText = {setNota1}
                keyboardType = 'numeric'

            />

            <TextInput
                
                style = {styles.input}
                placeholder = "Nota 2"
                onChangeText = {setNota2}
                keyboardType = 'numeric'
                
            />

            <TextInput

                style = {styles.input}
                placeholder = "Nota 3"
                onChangeText = {setNota3}
                keyboardType = 'numeric'

            />

            <TextInput

                style = {styles.input}
                placeholder = "Nota 4"
                onChangeText = {setNota4}
                keyboardType = 'numeric'

            />

            <Button style = {styles.button} title = "Calcular Media" onPress = {calcularMedia}/>

        </View>

    );

};

const styles = StyleSheet.create({

    container: {

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',

    },

    input: {

      width: 200,
      height: 40,
      borderColor: 'lightgray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: 'white',
      

    },

  });
 
export default HomeScreen;