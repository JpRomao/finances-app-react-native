import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function Button({transactionValue}) {
  function handleAddTransaction() {}

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={() => console.log('oi')}>
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
