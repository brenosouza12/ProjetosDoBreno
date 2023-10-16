import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Correção na importação
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class WeatherApp extends Component {

  state = {

    temperature: '30°C',
    condition: 'Ensolarado',
    location: 'Aspect Sword',

  };

  updateWeather = () => {

    const newTemperature = `${Math.floor(Math.random() * 10) + 20}°C`;
    const conditions = ['Ensolarado', 'Chuvoso', 'Nublado', 'Vento', 'Neve'];
    const newCondition = conditions[Math.floor(Math.random() * conditions.length)];

    this.setState({

      temperature: newTemperature,
      condition: newCondition,

    });

  };

  render() {

    const { temperature, condition, location } = this.state;

    return (

      <View style = {styles.container}>

        <Text style = {styles.location}>{location}</Text>
        <Icon name = "weather-sunny" size = {100} color = "orange" />
        <Text style = {styles.temperature}>{temperature}</Text>
        <Text style = {styles.condition}>{condition}</Text>

        <TouchableOpacity style = {styles.button} onPress = {this.updateWeather}>

          <Text style = {styles.buttonText}>Atualizar</Text>

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

  location: {

    fontSize: 24,
    marginBottom: 10,

  },

  temperature: {

    fontSize: 48,

  },

  condition: {

    fontSize: 18,

  },

  button: {

    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,

  },

  buttonText: {

    color: 'white',
    fontSize: 16,
    
  },

});

export default WeatherApp;

