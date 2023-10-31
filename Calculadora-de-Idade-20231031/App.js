import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';

export default function AgeCalculatorApp() {

  const [birthYear, setBirthYear] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [age, setAge] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('years');

  const calculateAge = () => {

    if (birthYear === '' || currentYear === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;

    }

    const birthYearInt = parseInt(birthYear, 10);
    const currentYearInt = parseInt(currentYear, 10);

    if (birthYearInt <= currentYearInt) {

      const ageInYears = currentYearInt - birthYearInt;
      const ageInMonths = ageInYears * 12;
      const ageInDays = ageInYears * 365;
      const ageInWeeks = ageInDays / 7;

      switch (selectedUnit) {

        case 'years':
          setAge(ageInYears);
          break;
        case 'months':
          setAge(ageInMonths);
          break;
        case 'days':
          setAge(ageInDays);
          break;
        case 'weeks':
          setAge(ageInWeeks);
          break;
        default:
          setAge(ageInYears);

      }

    } else {

      Alert.alert('Erro', 'Ano de nascimento deve ser menor ou igual ao ano atual.');

    }

  };

  const clearFields = () => {

    setBirthYear('');
    setCurrentYear('');
    setAge(null);

  };

  const getMessage = () => {

    if (age === null) {
      return '';

    }

    let message = `Você tem ${age} `;

    switch (selectedUnit) {

      case 'years':
        message += 'anos de idade.';
        break;
      case 'months':
        message += 'meses de idade.';
        break;
      case 'days':
        message += 'dias de idade.';
        break;
      case 'weeks':
        message += 'semanas de idade.';
        break;
      default:
        message += 'anos de idade.';

    }

    return message;

  };

  return (

    <View style = {styles.container}>

      <Text style = {styles.label}>Ano de Nascimento (YYYY):</Text>

      <TextInput

        style = {styles.input}
        onChangeText = {text => setBirthYear(text)}
        value = {birthYear}
        keyboardType = "numeric"
        placeholder = "Ano de Nascimento"

      />

      <Text style={styles.label}>Ano Atual (YYYY):</Text>

      <TextInput

        style = {styles.input}
        onChangeText = {text => setCurrentYear(text)}
        value = {currentYear}
        keyboardType = "numeric"
        placeholder = "Ano Atual"

      />

      <Text style = {styles.label}>Calcular em:</Text>

      <Picker

        selectedValue = {selectedUnit}
        onValueChange = {(itemValue, itemIndex) => setSelectedUnit(itemValue)}>
        <Picker.Item label = "Anos" value = "years" />
        <Picker.Item label = "Meses" value = "months" />
        <Picker.Item label = "Dias" value = "days" />
        <Picker.Item label = "Semanas" value = "weeks" />

      </Picker>

      <Button title = "Calcular Idade" onPress = {calculateAge} />
      <Button title = "Limpar Campos" onPress = {clearFields} />

      <Text style = {styles.message}>{getMessage()}</Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },

  label: {

    fontSize: 18,
    marginBottom: 5,

  },

  input: {

    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,

  },

  message: {

    marginTop: 20,
    fontSize: 18,

  },
  
});
