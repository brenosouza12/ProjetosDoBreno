import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BusDetailsScreen from './screens/BusDetailsScreen';
import AddBusScreen from './screens/AddBusScreen';
import EditBusScreen from './screens/EditBusScreen';
import { init } from './data/db';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {

    init()
      .then(() => {
        console.log('Banco de dados inicializado com sucesso');
      })
      .catch((error) => {
        console.error('Erro na inicialização do banco de dados:', error);
      });
  }, []);


  const [buses, setBuses] = useState([]);

  const handleAddBus = (bus) => {
    const newBus = { id: Date.now(), ...bus };
    setBuses([...buses, newBus]);
  };

  const handleEditBus = (busId, updatedBus) => {
    setBuses((prevBuses) => {
      return prevBuses.map((bus) => {
        if (bus.id === busId) {
          return { ...bus, ...updatedBus };
        }
        return bus;
      });
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={(props) => <HomeScreen {...props} buses={buses} />} />
        <Stack.Screen name="BusDetailsScreen" component={BusDetailsScreen} />
        <Stack.Screen name="AddBusScreen" component={(props) => <AddBusScreen {...props} onAddBus={handleAddBus} />} />
        <Stack.Screen name="EditBusScreen" component={(props) => <EditBusScreen {...props} onEditBus={handleEditBus} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
