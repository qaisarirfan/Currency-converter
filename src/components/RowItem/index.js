import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStyleableTheme } from '../../redux/reducers/themes/selectors';

import themeStyles from './styles';

const RowItem = ({ title, isButton, onPress, rightIcon, ...rest }) => {
  const styleableTheme = useSelector(selectStyleableTheme);

  const styles = themeStyles(styleableTheme);
  let component = (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </View>
  );
  if (isButton) {
    component = (
      <TouchableOpacity onPress={onPress} style={styles.row} {...rest}>
        <Text style={styles.title}>{title}</Text>
        {rightIcon}
      </TouchableOpacity>
    );
  }
  return component;
};

RowItem.propTypes = {
  isButton: PropTypes.bool,
  onPress: PropTypes.func,
  rightIcon: PropTypes.node,
  title: PropTypes.string.isRequired,
};

RowItem.defaultProps = {
  isButton: true,
  onPress: () => {},
  rightIcon: null,
};

export default RowItem;

export function RowSeparator() {
  const styleableTheme = useSelector(selectStyleableTheme);
  const styles = themeStyles(styleableTheme);
  return <View style={styles.separator} />;
}
