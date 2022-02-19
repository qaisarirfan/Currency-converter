import { StyleSheet } from 'react-native';
import Color from 'color';

const styles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      borderColor: theme[200],
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      marginHorizontal: 20,
      marginVertical: 10,
    },
    containerDisabled: {
      backgroundColor: '#f0f0f0',
    },
    button: {
      backgroundColor: '#FFF',
      borderBottomLeftRadius: 5,
      borderRightColor: theme[100],
      borderRightWidth: StyleSheet.hairlineWidth,
      borderTopLeftRadius: 5,
      padding: 15,
    },
    buttonText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    input: {
      color: Color(theme.A700).darken(0.6).hex(),
      flex: 1,
      fontSize: 16,
      padding: 10,
    },
  });
export default styles;
