import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class Relogio extends Component {

  constructor() {

    super();
    this.state = {
      time: new Date().toLocaleTimeString([], { hour12: false }),
      date: new Date().toLocaleDateString(),
      is24HourFormat: true,
      
    };

    // Atualiza o relógio a cada segundo
    this.interval = setInterval(() => {

      this.setState({

        time: new Date().toLocaleTimeString([], { hour12: !this.state.is24HourFormat }),

      });

    }, 1000);

  }

  componentWillUnmount() {

    clearInterval(this.interval); // Para o intervalo quando o componente for desmontado

  }

  toggleHourFormat = () => {

    this.setState((prevState) => ({

      is24HourFormat: !prevState.is24HourFormat,
      time: new Date().toLocaleTimeString([], { hour12: !prevState.is24HourFormat }),

    }));

  };

  render() {

    return (

      <View style = {styles.container}>

        <Text style = {styles.time}>{this.state.time}</Text>
        <Text style = {styles.date}>{this.state.date}</Text>

        <TouchableOpacity

          style = {styles.button}
          onPress = {this.toggleHourFormat}

        >
          <Text style = {styles.buttonText}>

            Toggle Format ({this.state.is24HourFormat ? '12h' : '24h'})

          </Text>

        </TouchableOpacity>

      </View>

    );

  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',

  },

  time: {

    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',

  },

  date: {

    fontSize: 24,
    marginVertical: 10,
    color: '#777',

  },

  button: {

    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,

  },
  buttonText: {

    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',

  },

});

export default Relogio;
