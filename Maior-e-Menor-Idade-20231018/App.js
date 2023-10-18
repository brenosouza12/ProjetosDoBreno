import React, { useState} from "react";
import { View, Text, TextInput, Button, StyleSheet,FlatList,TouchableOpacity } from 'react-native';

export default function App(){

     const [idades,setIdades] = useState([]);
     const [inputIdade,setInputIdade] = useState('');
     const [idadeMinima,setIdadeMinima] = useState(null);
     const [idadeMaxima,setIdadeMaxima] = useState(null);
     const [idadeMedia,setIdadeMedia] = useState(null);

     const adicionarIdade = () => {

        if(inputIdade !== ''){

            setIdades([...idades,parseInt(inputIdade)]);
            setInputIdade('');

        }

     };

     const removerIdade = (index) => {

           const novasIdades = [...idades];
           novasIdades.splice(index, 1);
           setIdades(novasIdades);

     };

     const calcularEstatisticas = () => {

        if(idades.length > 0){

           const min = Math.min(...idades);
           const max = Math.max(...idades);
           const avg = idades.reduce((total,idade) => total + idade, 0) / idades.length;

           setIdadeMinima(min);
           setIdadeMaxima(max);
           setIdadeMedia(avg.toFixed(2))

        }

     };

     return (

          <View style = {styles.container}>

            <Text style = {styles.titulo}>Idade das Pessoas by Breno Souza</Text>

            <TextInput
            
                style = {styles.input}
                placeholder = 'Digite uma idade'
                value = {inputIdade}
                onChangeText = {(texto) => setInputIdade(texto)}
                keyboardType = 'numeric'

            />

            <Button title = "Adicionar Idade" onPress = {adicionarIdade}/>
            <Button title = "Calcular Estatisticas" onPress = {calcularEstatisticas}/>
            {idadeMinima !== null && idadeMaxima !== null && idadeMedia !== null && (

                <View style = {styles.resultados}>

                  <Text>Menor Idade: {idadeMinima}</Text>
                  <Text>Maior Idade: {idadeMaxima}</Text>
                  <Text>Média de Idades: {idadeMedia}</Text>

                </View>

            )}

            <Text style = {styles.listaTitulo}>Idades Inseridas:</Text>

              <FlatList

               data = {idades}
               keyExtractor = {(item, index) => index.toString()}
               renderItem = {({ item, index }) => (

                 <View style = {styles.itemIdade}>

                    <Text>{item}</Text>

                       <TouchableOpacity onPress = {() => removerIdade(index)}>

                         <Text style = {styles.botaoRemover}>Remover</Text>

                       </TouchableOpacity>

                 </View>

                    )}

              />

          </View>

     )
     
}

const styles = StyleSheet.create({

     container: {

       flex: 1,
       alignItems: 'center',
       padding: 16,

     },

     titulo: {

        fontSize: 24,
        marginBottom: 16,

     },

     input: {

        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingLeft: 5,
        
     },

     resultados: {
        
        marginTop: 20,
        marginBottom: 20,

     },

     listaTitulo: {

        fontSize: 18,
        marginBottom: 10,

     },

     itemIdade: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,

     },

     botaoRemover: {

        color: 'red',
        fontSize: 16,

     },

});