gitimport React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Modal, StyleSheet } from 'react-native';
import { initDatabase, addBus, getAllBuses } from './Database';

export default function App() {
  const [buses, setBuses] = useState([]);
  const [busInfo, setBusInfo] = useState({
    empresa: '',
    prefixo: '',
    chassi: '',
    ano: '',
    placa: '',
    modelo: '',
  });
  const [editingBus, setEditingBus] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  const [storedBuses, setStoredBuses] = useState([]);

  useEffect(() => {
    initDatabase();
    loadBuses();
    loadStoredBuses();
  }, []);

  const saveBus = () => {
    addBus(busInfo);
    loadBuses();
    setBusInfo({ empresa: '', prefixo: '', chassi: '', ano: '', placa: '', modelo: '' });
  };

  const loadBuses = () => {
    getAllBuses((buses) => {
      setBuses(buses);
    });
  }

  const loadStoredBuses = () => {
    getAllBuses((buses) => {
      setStoredBuses(buses);
    });
  }

  const editBus = (index) => {
    const busToEdit = buses[index];
    setBusInfo({ ...busToEdit });
    setEditingBus(index);
  };

  const deleteBus = (index) => {
    const updatedBuses = buses.filter((_, i) => i !== index);
    setBuses(updatedBuses);
  };

  const searchBuses = (searchTerm) => {
    const results = buses.filter((bus) => {
      return (
        bus.empresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.prefixo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.ano.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.chassi.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  const showBusDetails = (bus) => {
    setSelectedBus(bus);
  };

  const closeBusDetails = () => {
    setSelectedBus(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ônibus Aspectverso</Text>

      <TextInput
        style={styles.input}
        placeholder="Empresa"
        value={busInfo.empresa}
        onChangeText={(text) => setBusInfo({ ...busInfo, empresa: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Prefixo"
        value={busInfo.prefixo}
        onChangeText={(text) => setBusInfo({ ...busInfo, prefixo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={busInfo.modelo}
        onChangeText={(text) => setBusInfo({ ...busInfo, modelo: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Chassi"
        value={busInfo.chassi}
        onChangeText={(text) => setBusInfo({ ...busInfo, chassi: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano"
        value={busInfo.ano}
        onChangeText={(text) => setBusInfo({ ...busInfo, ano: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={busInfo.placa}
        onChangeText={(text) => setBusInfo({ ...busInfo, placa: text })}
      />
      <Button title={editingBus !== null ? 'Editar Ônibus' : 'Adicionar Ônibus'} onPress={saveBus} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Ônibus"
        onChangeText={(text) => searchBuses(text)}
      />
      <FlatList
        data={searchResults.length > 0 ? searchResults : buses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.busItem}>
            <Text style={styles.busItemText}>Empresa: {item.empresa}</Text>
            <Text style={styles.busItemText}>Prefixo: {item.prefixo}</Text>
            <Text style={styles.busItemText}>Modelo: {item.modelo}</Text>
            <Text style={styles.busItemText}>Chassi: {item.chassi}</Text>
            <Text style={styles.busItemText}>Ano: {item.ano}</Text>
            <Text style={styles.busItemText}>Placa: {item.placa}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Detalhes" onPress={() => showBusDetails(item)} />
              <Button title="Editar" onPress={() => editBus(index)} />
              <Button title="Excluir" onPress={() => deleteBus(index)} />
            </View>
          </View>
        )}
      />
      <Modal visible={selectedBus !== null} animationType="slide">
        <View style={styles.busDetails}>
          <Text style={styles.header}>Detalhes do Ônibus</Text>
          <Text style={styles.busItemText}>Empresa: {selectedBus?.empresa}</Text>
          <Text style={styles.busItemText}>Prefixo: {selectedBus?.prefixo}</Text>
          <Text style={styles.busItemText}>Modelo: {selectedBus?.modelo}</Text>
          <Text style={styles.busItemText}>Chassi: {selectedBus?.chassi}</Text>
          <Text style={styles.busItemText}>Ano: {selectedBus?.ano}</Text>
          <Text style={styles.busItemText}>Placa: {selectedBus?.placa}</Text>
          <Button title="Fechar" onPress={closeBusDetails} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#fff',
  },
  busItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  busItemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  busDetails: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
