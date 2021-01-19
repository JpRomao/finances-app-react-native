import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import Images from '../Images';

export default function Input({selectValue}) {
  const [incomeValue, setIncomeValue] = useState('R$ 0,00');
  const [description, setDescription] = useState();

  return (
    <>
      <View style={styles.inputBlock}>
        <Images selectValue={selectValue} />
        <TextInput
          onFocus={() => setIncomeValue('')}
          onChangeText={(income) => setIncomeValue(income)}
          onEndEditing={(income) => {
            let money = income.nativeEvent.text;
            money = money.replace(',', '.');
            money = parseFloat(money).toFixed(2);
            money = money.replace('.', ',');

            money === '' ||
            money === undefined ||
            money === null ||
            money === 'NaN'
              ? setIncomeValue('R$ 0,00')
              : setIncomeValue(`R$ ${money}`);
          }}
          value={incomeValue}
          style={styles.textInput}
        />
      </View>
    </>
  );
}

const styles = {
  textInput: {
    width: '50%',
    height: 46,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 21,
    backgroundColor: '#EEEFFF',
    textAlign: 'center',
  },
  inputBlock: {
    flexDirection: 'row',
  },
};
