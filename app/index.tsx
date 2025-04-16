import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotaoArredondado from '../components/BotaoArredondado';

const Index = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const botoes = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', 'C', '=', '+'],
  ];

  const handlePress = (valor: string) => {
    if (valor === 'C') {
      setInput('');
      setResultado('');
    } else if (valor === '=') {
      try {
        const res = eval(input); 
        setResultado('= ' + res);
      } catch (err) {
        setResultado('Erro');
      }
    } else {
      setInput((prev) => prev + valor);
      setResultado('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input}</Text>
      <Text style={styles.resultado}>{resultado}</Text>

      {botoes.map((linha, i) => (
        <View key={i} style={styles.linha}>
          {linha.map((btn, j) => (
            <BotaoArredondado key={j} title={btn} onPress={() => handlePress(btn)} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 36,
    textAlign: 'right',
    marginBottom: 10,
    color: '#aaaaff',
  },
  resultado: {
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 20,
    color: '#f0a',
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Index;
