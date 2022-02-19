import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import reverse from '../../assets/images/reverse.png';

function ReverseButton({ onPress, text }) {
  return (
    <TouchableOpacity testID="reverse_button" onPress={onPress} style={styles.button}>
      <Image source={reverse} style={styles.buttonIcon} resizeMode="contain" />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

ReverseButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

ReverseButton.defaultProps = {
  onPress: () => {},
  text: null,
};

export default ReverseButton;
