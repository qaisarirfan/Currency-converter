import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';

import themeStyles from './styles';

function ConversionInput({ text, onButtonPress, ...rest }) {
  const styleableTheme = useSelector(selectStyleableTheme);

  const styles = themeStyles(styleableTheme);

  const containerStyles = [styles.container];

  if (rest.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}

export default ConversionInput;
