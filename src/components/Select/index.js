import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Input from '../Input';

export default function Select() {
  const [selectValue, setSelectValue] = useState();

  const [selectStyle, setSelectStyle] = useState({
    inputIOS: {
      color: '#FFF',
    },
    inputAndroid: {
      color: '#FFF',
    },
    placeholder: {
      color: '#9F9F9F',
    },
  });

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Selecione sua operação:</Text>
        <RNPickerSelect
          style={selectStyle}
          value={selectValue}
          onValueChange={(value) => {
            setSelectValue(value);
            value === 'income'
              ? setSelectStyle({
                  inputIOS: {
                    color: '#00D500',
                  },
                  inputAndroid: {
                    color: '#00D500',
                  },
                  placeholder: {
                    color: '#9F9F9F',
                  },
                })
              : setSelectStyle({
                  inputIOS: {
                    color: '#E00000',
                  },
                  inputAndroid: {
                    color: '#E00000',
                  },
                  placeholder: {
                    color: '#9F9F9F',
                  },
                });
          }}
          items={[
            {
              label: 'Crédito',
              value: 'income',
              key: 'income',
              color: '#00A000',
            },
            {
              label: 'Débito',
              value: 'outcome',
              key: 'outcome',
              color: '#A00000',
            },
          ]}
          placeholder={placeholder}
        />
      </View>

      <Input selectValue={selectValue} />
    </>
  );
}

const placeholder = {
  label: 'Selecione a operação...',
  fontSize: 10,
};

const styles = {
  view: {
    backgroundColor: '#EEEEFF',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 23,
  },
};
