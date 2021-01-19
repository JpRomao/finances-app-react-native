import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Button({transactionValue}) {
  async function handleAddTransaction() {
    const item = await AsyncStorage.setItem('');
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTransaction}
        activeOpacity={0.6}>
        <Text style={styles.text}>Lançar transação</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = {
  button: {
    borderWidth: 1,
    padding: 8,
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: '#85D9',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
  },
};
