import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

const LivroListScreen = () => {

    const [livros,setLivros] = useState([

        { id: '1', titulo: 'As Aventuras de Lily Vol.1 - Lily Harper', autor: 'Louise Wood', data: '02/01/2016'},
        { id: '2', titulo: 'As Aventuras de Lily Vol.2 - Lily Harper', autor: 'Louise Wood', data: '09/01/2016'},
        { id: '3', titulo: 'As Aventuras de Lily Vol.3 - Lily Harper', autor: 'Louise Wood', data: '16/01/2016'},
        { id: '4', titulo: 'As Aventuras de Lily Vol.4 - Lily Harper', autor: 'Louise Wood', data: '23/01/2016'},
        { id: '5', titulo: 'As Aventuras de Lily Vol.5 - Lily Harper', autor: 'Louise Wood', data: '30/01/2016'},
        { id: '6', titulo: 'As Aventuras de Lily Vol.6 - Lily Aspect', autor: 'Louise Wood', data: '02/04/2017'},
        { id: '7', titulo: 'As Aventuras de Lily Vol.7 - Lily Aspect', autor: 'Louise Wood', data: '09/04/2017'},
        { id: '8', titulo: 'As Aventuras de Lily Vol.8 - Lily Aspect', autor: 'Louise Wood', data: '16/04/2017'},
        { id: '9', titulo: 'One Piece Vol.1', autor: 'Eiichiro Oda', data: '24/12/1997'},
        { id: '10', titulo: 'One Piece Vol.2', autor: 'Eiichiro Oda', data: '03/04/1998'}
   
    ]);

    return (

        <View style = {styles.container}>

             <FlatList
               
                data = {livros}
                keyExtractor = {(livro) => livro.id}
                renderItem = {({ item }) => (

                    <View style = {styles.livroItem}>

                      <Text>{item.titulo}</Text>
                      <Text>{item.autor}</Text>
                      <Text>{item.data}</Text>

                    </View>

                )}

             />

        </View>

    );

};

const styles = StyleSheet.create({

    container:{

        flex: 1,
        padding: 16,

    },

    livroItem:{

        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,

    }

});

export default LivroListScreen;