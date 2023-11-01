import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import commonStyles from '../styles/commonStyles';

const BusForm = ({ onSave }) => {
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSave = () => {
    onSave({ company, model, year, plate, capacity });
    // Limpar os campos após salvar
    setCompany('');
    setModel('');
    setYear('');
    setPlate('');
    setCapacity('');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.headerText}>Formulário de Ônibus</Text>
      <Text style={commonStyles.text}>Empresa do ônibus:</Text>
      <TextInput
        style={commonStyles.input}
        value={company}
        onChangeText={setCompany}
      />
      <Text style={commonStyles.text}>Modelo do ônibus:</Text>
      <TextInput
        style={commonStyles.input}
        value={model}
        onChangeText={setModel}
      />
      <Text style={commonStyles.text}>Ano do ônibus:</Text>
      <TextInput
        style={commonStyles.input}
        value={year}
        onChangeText={setYear}
      />
      <Text style={commonStyles.text}>Placa do ônibus:</Text>
      <TextInput
        style={commonStyles.input}
        value={plate}
        onChangeText={setPlate}
      />
      <Text style={commonStyles.text}>Capacidade do ônibus:</Text>
      <TextInput
        style={commonStyles.input}
        value={capacity}
        onChangeText={setCapacity}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default BusForm;
