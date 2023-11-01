import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addBus } from '../data/busService';

const AddBusScreen = ({ navigation, onAddBus }) => {
  const [busInfo, setBusInfo] = useState({
    company: '',
    model: '',
    year: '',
    plate: '',
    capacity: '',
  });

  const handleAddBus = async () => {
    try {
      // Adicionar o ônibus ao banco de dados
      const busId = await addBus(busInfo.company, busInfo.model, busInfo.year, busInfo.plate, busInfo.capacity);

      // Atualizar a lista de ônibus chamando a função onAddBus
      onAddBus({ id: busId, ...busInfo });

      // Navegar de volta para a tela anterior
      navigation.goBack();
    } catch (error) {
      // Lidar com erros, se houver
      console.error('Erro ao adicionar ônibus:', error);
    }
  };

  return (
    <View>
      <Text>Adicionar Ônibus</Text>
      <TextInput
        placeholder="Empresa"
        value={busInfo.company}
        onChangeText={(text) => setBusInfo({ ...busInfo, company: text })}
      />
      <TextInput
        placeholder="Modelo"
        value={busInfo.model}
        onChangeText={(text) => setBusInfo({ ...busInfo, model: text })}
      />
      <TextInput
        placeholder="Ano"
        value={busInfo.year}
        onChangeText={(text) => setBusInfo({ ...busInfo, year: text })}
      />
      <TextInput
        placeholder="Placa"
        value={busInfo.plate}
        onChangeText={(text) => setBusInfo({ ...busInfo, plate: text })}
      />
      <TextInput
        placeholder="Capacidade"
        value={busInfo.capacity}
        onChangeText={(text) => setBusInfo({ ...busInfo, capacity: text })}
      />
      <Button title="Adicionar Ônibus" onPress={handleAddBus} />
    </View>
  );
};

export default AddBusScreen;
