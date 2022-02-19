import { Dimensions, StyleSheet } from 'react-native';

const screen = Dimensions.get('window');

// Home: Styling here
const styles = (theme) =>
  StyleSheet.create({
    root: {
      backgroundColor: theme[500],
      flex: 1,
    },
    header: {
      alignItems: 'flex-end',
      marginHorizontal: 20,
    },
    content: {
      paddingTop: screen.height * 0.04,
    },
    textHeader: {
      color: theme[50],
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    listWrapper: {
      backgroundColor: 'white',
      padding: 12,
    },
    list: {
      borderBottomColor: theme[500],
      borderBottomWidth: StyleSheet.hairlineWidth,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 6,
      paddingTop: 6,
    },
  });

export default styles;
