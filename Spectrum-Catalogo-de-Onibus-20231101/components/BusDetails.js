import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from '../styles/commonStyles';

const BusDetails = ({ bus }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.headerText}>Detalhes do Ônibus</Text>
      <Text style={commonStyles.text}>Empresa: {bus.company}</Text>
      <Text style={commonStyles.text}>Modelo: {bus.model}</Text>
      <Text style={commonStyles.text}>Ano: {bus.year}</Text>
      <Text style={commonStyles.text}>Placa: {bus.plate}</Text>
      <Text style={commonStyles.text}>Capacidade: {bus.capacity}</Text>
      {/* Adicione mais informações conforme necessário e aplique os estilos comuns */}
    </View>
  );
};

export default BusDetails;
