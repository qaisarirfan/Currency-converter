import { StyleSheet } from 'react-native';

const styles = (theme) =>
  StyleSheet.create({
    row: {
      alignItems: 'center',
      backgroundColor: theme[300],
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    title: {
      color: theme[50],
      fontSize: 16,
    },
    separator: {
      height: StyleSheet.hairlineWidth,
    },
  });

export default styles;
