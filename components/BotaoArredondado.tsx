import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  size?: number;
}

const BotaoArredondado: React.FC<Props> = ({ title, onPress, size = 60 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: size, height: size, borderRadius: 20}]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BotaoArredondado;
