import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  useEffect(() => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    setResult(num1 + num2);
  }, [number1, number2]);

  const handleAddition = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    setResult(num1 - num2);
  };

  const handleReset = () => {
    setNumber1('');
    setNumber2('');
    setResult(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.calculatorName}>Calculadora Simples</Text>

      <Text style={styles.resultText}>Resultado: {result}</Text>

      <View style={styles.inputContainer}>
        <Text>Número 1:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number1}
          onChangeText={text => setNumber1(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Número 2:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number2}
          onChangeText={text => setNumber2(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddition}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
        <Text style={styles.buttonText}>Subtrair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.buttonText}>Redefinir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  calculatorName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Calculator;
