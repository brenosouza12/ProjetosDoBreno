import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditBusScreen = ({ route, navigation, onEditBus }) => {
  const { bus } = route.params;
  const [busInfo, setBusInfo] = useState({ ...bus });

  const handleEditBus = () => {
    onEditBus(bus.id, busInfo);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Editar Ônibus</Text>
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
      <Button title="Salvar Edições" onPress={handleEditBus} />
    </View>
  );
};

export default EditBusScreen;

