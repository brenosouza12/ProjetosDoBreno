import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import BusList from '../components/BusList';
import { getAllBuses } from '../data/busService';

const HomeScreen = ({ navigation }) => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const busData = await getAllBuses();
      setBuses(busData);
    } catch (error) {
      console.error('Erro ao buscar ônibus:', error);
    }
  };

  const handleAddBus = (newBus) => {
    // Adicione o novo ônibus à lista existente
    setBuses([...buses, newBus]);
  };

  return (
    <View>
      <Text>Lista de Ônibus</Text>
      <BusList buses={buses} onBusPress={(bus) => navigation.navigate('BusDetailsScreen', { bus })} />
      <Button title="Adicionar Ônibus" onPress={() => navigation.navigate('AddBusScreen', { onAddBus: handleAddBus })} />
    </View>
  );
};

export default HomeScreen;
