import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (buttonPressed) => {
    if (buttonPressed === '=') {
      calculateResult();
    } else if (buttonPressed === 'C') {
      clearInput();
    } else {
      setInput(prevInput => prevInput + buttonPressed);
    }
  };

  const calculateResult = () => {
    try {
      const evaluation = eval(input);
      setResult(evaluation.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={() => handleButtonPress('=')}>
          <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 20,
  },
  input: {
    fontSize: 40,
  },
  resultContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
  },
  result: {
    fontSize: 30,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 80,
    backgroundColor: '#007BFF',
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  equalButton: {
    backgroundColor: '#28a745',
    flex: 2,
  },
  equalButtonText: {
    fontSize: 32,
  },
});

export default App
