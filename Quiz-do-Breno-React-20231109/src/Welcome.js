import React from "react";
import { View, Text, Button } from 'react-native';

function Welcome ({ onStartQuiz }) {

    return (

       <View>

            <Text>Olá, meu nome é Breno e nesse quiz, eu vou fazer algumas perguntas sobre alguns assuntos sobre curiosidades aleatorias da VR-12</Text>
            <Button title = "Aperta isso para começar o quiz :)" onPress = {onStartQuiz}/>

       </View>

    )

}

export default Welcome;