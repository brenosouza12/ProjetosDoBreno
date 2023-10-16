import react, {useState,useEffect,useRef} from "react";

import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

   const Relogio = () => {

      const [time,setTime] = useState(new Date().toLocaleTimeString([],{ hour12: false}));
      const [date,setDate] = useState(new Date().toLocaleDateString());
      const [isFormato24Horas,setIsFormato24Horas] = useState(true);
      const [cronometro,setCronometro] = useState(0);
      const [temporizador,setTemporizador] = useState(0);
      const [temporizadorInput,setTemporizadorInput] = useState('');
      const temporizadorRef = useRef(null); 

      useEffect(() => {

         const intervalId = setInterval(() => {

            setTime(new Date().toLocaleTimeString([], {hour12: !isFormato24Horas}));
         }, 1000);

         return () => {

            clearInterval(intervalId);

         };

      }, [isFormato24Horas]);

      const toggleFormatoHora = () => {

         setIsFormato24Horas(!isFormato24Horas);
         setTime(new Date().toLocaleTimeString([], {hour12: !isFormato24Horas}));

      };

      const startCronometro = () => {
        
         const cronometroId = setInterval(() => {

          setCronometro((prevCronometro) => prevCronometro + 1);

           }, 1000);

            setCronometro(cronometroId);

         };

      const stopCronometro = () => {
             
           clearInterval(cronometro);

         };

         
      const resetCronometro = () => {

           clearInterval(cronometro);
           setCronometro(0);

         };

      const startTemporizador = () => {

            const tempo = parseInt(temporizadorInput, 10);

            if (!isNaN(tempo) && tempo > 0) {

              setTemporizador(tempo);

              temporizadorRef.current = setInterval(() => {

                setTemporizador((prevTemporizador) => prevTemporizador - 1);

              }, 1000);

            }

         };  

      const stopTemporizador = () => {
         
            clearInterval(temporizadorRef.current);

          };

      const resetTemporizador = () => {

         clearInterval(temporizadorRef.current);
         setTemporizador(0);
         setTemporizadorInput('');

       };
         
       return (

         <View style = {styles.container}>

            <View style = {styles.header}>
            
             <Text style = {styles.hora}>{time}</Text>
             <Text style = {styles.data}>{date}</Text>

         </View>

         <View style = {styles.timer}>

           <TextInput

             style = {styles.input}
             placeholder = "Temporizador (segundos)"
             onChangeText = {(text) => setTemporizadorInput(text)}
             value = {temporizadorInput}
             keyboardType = "numeric"

           />

         <TouchableOpacity style = {styles.botao} onPress = {startTemporizador}>

           <Text style = {styles.botaoTexto}>Iniciar Temporizador</Text>

         </TouchableOpacity>

           <Text style = {styles.temporizador}>{temporizador} segundos</Text>

         <TouchableOpacity style = {styles.botao} onPress = {stopTemporizador}>

           <Text style = {styles.botaoTexto}>Parar Temporizador</Text>

         </TouchableOpacity>

         <TouchableOpacity style = {styles.botao} onPress = {resetTemporizador}>

           <Text style = {styles.botaoTexto}>Reiniciar Temporizador</Text>

         </TouchableOpacity>

         </View>

         <View style = {styles.cronometro}>

           <Text style = {styles.cronometroText}>Cronômetro: {cronometro} segundos</Text>

         <TouchableOpacity style = {styles.botao} onPress = {startCronometro}>

          <Text style = {styles.botaoTexto}>Iniciar Cronômetro</Text>

         </TouchableOpacity>

         <TouchableOpacity style = {styles.botao} onPress = {stopCronometro}>

          <Text style = {styles.botaoTexto}>Parar Cronômetro</Text>

         </TouchableOpacity>

         <TouchableOpacity style = {styles.botao} onPress = {resetCronometro}>

          <Text style = {styles.botaoTexto}>Reiniciar Cronômetro</Text>

         </TouchableOpacity>

         </View>

         <TouchableOpacity style = {styles.botao} onPress = {toggleFormatoHora}>

         <Text style = {styles.botaoTexto}>

          Alternar Formato ({isFormato24Horas ? '12h' : '24h'})

         </Text>

         </TouchableOpacity>

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

   header:{

      alignItems: 'center',

   },

   hora: {

      fontSize: 64,
      fontWeight: 'bold',
      color: '#333',

   },

   data: {

      fontSize: 34,
      marginVertical: 10,
      color: '#777',
      
   },

   timer: {

      marginVertical: 20,
      alignItems: 'center',

   },

   input: {

      width: 200,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,

   },

   temporizador: {

      fontSize: 24,
      marginBottom: 10,

   },

   cronometro: {

      alignItems: 'center',

   },

   cronometroText: {

      fontSize: 24,
      marginBottom: 10,

   },

   botao: {

      backgroundColor: '#007aff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginBottom: 10,

   },

   botaoTexto:{

      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',

   },

});

export default Relogio;
