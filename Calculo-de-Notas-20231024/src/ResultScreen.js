import React from "react";
import { View, Text, StyleSheet} from 'react-native';

const ResultScreen = ({ route }) => {

    const { media } =  route.params;

    let mensagem = '';

    if (media >= 7){

        mensagem = 'Wow, you are a genius';

    } else if (media < 5){

        mensagem = 'Noooooooo, you are a dumb';

    } else {

        mensagem = 'You have a chance to pass';

    }

    return (

        <View style = {styles.container}>

                <Text style = {styles.text}>Média do aluno: {media}</Text>

                    <Text style = {media >= 7 ? styles.mensagemAprovado : media < 5 ? styles.mensagemReprovado : styles.mensagemRecuperacao}>

                        {media >= 7 ? 'Aprovado' : media < 5 ? 'Reprovado' : 'Recuperação'}

                </Text> 

        </View>

    );

};

const styles = StyleSheet.create({

    container: {

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },

    text: {

      fontSize: 20,

    },

    mensagemAprovado: {

      color: 'green',

    },

    mensagemReprovado: {

      color: 'red',

    },

    mensagemRecuperacao: {

      color: 'orange',

    },

  });



export default ResultScreen;