import React from 'react';
import {Image} from 'react-native';

import incomeIcon from '../../assets/icons/incomeIcon.png';
import outcomeIcon from '../../assets/icons/outcomeIcon.png';

export default function Images({selectValue}) {
  const icon = selectValue == 'outcome' ? outcomeIcon : incomeIcon;
  return <Image source={icon} style={styles.image} />;
}

const styles = {
  image: {
    resizeMode: 'contain',
    width: 65,
    height: 50,
    marginRight: 6,
  },
};
