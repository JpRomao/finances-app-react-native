import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Button from './components/Button';

import Select from './components/Select';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.container.backgroundColor}
      />

      <SafeAreaView style={styles.container}>
        <Select />
        <Button />
      </SafeAreaView>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F7F7F',
  },
};
