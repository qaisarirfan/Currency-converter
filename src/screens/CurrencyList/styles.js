import { StyleSheet } from 'react-native';

const styles = (styleableTheme) =>
  StyleSheet.create({
    root: {
      backgroundColor: styleableTheme[500],
      flex: 1,
    },
  });

export default styles;
