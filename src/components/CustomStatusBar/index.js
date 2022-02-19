import React from 'react';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export function CustomStatusBar({ backgroundColor, ...rest }) {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent={false} backgroundColor={backgroundColor} {...rest} />
    </View>
  );
}

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

CustomStatusBar.defaultProps = {};

export default CustomStatusBar;
