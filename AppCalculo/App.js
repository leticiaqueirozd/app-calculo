import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularSoma = () => {
    const soma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`O resultado da soma é: ${soma}`);
  };

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>Cálculo</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Digite o primeiro valor"
          value={numero1}
          onChangeText={(value) => setNumero1(value)}
          keyboardType="numeric"
        />
        <Input
          placeholder="Digite o segundo valor"
          value={numero2}
          onChangeText={(value) => setNumero2(value)}
          keyboardType="numeric"
        />
      </View>
      <Button
        title="SOMAR"
        onPress={calcularSoma}
        buttonStyle={styles.button}
      />
      <Text h4 style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginTop: 48,
  },
  inputContainer: {
    width: '45%',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: '100%',
  },
  result: {
    marginTop: 32,
  },
});
