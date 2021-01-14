import React, {useState} from 'react';
import {TextInput} from 'react-native';

export default function Input() {
  const [incomeValue, setIncomeValue] = useState('R$ 0,00');

  return (
    <>
      <TextInput
        clearTextOnFocus={true}
        onFocus={() => setIncomeValue('')}
        onChangeText={(income) => setIncomeValue(income)}
        onEndEditing={(income) => {
          let money = income.nativeEvent.text;
          console.log(money);
          money = money.replace(',', '.');
          money = parseFloat(money).toFixed(2);
          money = money.replace('.', ',');

          money == '' || money == undefined || money == null || money == 'NaN'
            ? setIncomeValue('R$ 0,00')
            : setIncomeValue(`R$ ${money}`);
        }}
        value={incomeValue}
        style={styles.textInput}
      />
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
};
