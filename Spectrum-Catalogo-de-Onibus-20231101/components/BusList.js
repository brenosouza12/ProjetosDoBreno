import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import commonStyles from '../styles/commonStyles';

  const BusList = ({ buses, onBusPress }) => {
    if (!buses || !Array.isArray(buses)) {
      return <Text style={commonStyles.text}>Nenhum ônibus encontrado.</Text>;
    }
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.headerText}>Lista de Ônibus</Text>
      {buses.length === 0 ? (
        <Text style={commonStyles.text}>Nenhum ônibus encontrado.</Text>
      ) : (
        <FlatList
          data={buses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={commonStyles.busItem}
              onPress={() => onBusPress(item)}
            >
              <Text style={commonStyles.busItemText}>
                {item.company} - {item.model}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default BusList;
