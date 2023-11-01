import React from 'react';
import { View, Text } from 'react-native';

const BusDetailsScreen = ({ route }) => {
  const { bus } = route.params;

  return (
    <View>
      <Text>Detalhes do Ônibus</Text>
      <Text>Empresa: {bus.company}</Text>
      <Text>Modelo: {bus.model}</Text>
      <Text>Ano: {bus.year}</Text>
      <Text>Placa: {bus.plate}</Text>
      <Text>Capacidade: {bus.capacity}</Text>
    </View>
  );
};

export default BusDetailsScreen;
