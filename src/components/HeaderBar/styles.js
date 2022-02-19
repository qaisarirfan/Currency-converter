import { Dimensions, StyleSheet } from 'react-native';

const styles = (theme) => {
  const screen = Dimensions.get('screen');
  const width = screen.width / 3;
  return StyleSheet.create({
    root: {},
    header: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingTop: 12,
    },
    back: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 6,
      width,
    },
    backButton: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      alignItems: 'center',
      backgroundColor: theme[800],
      justifyContent: 'center',
      width,
    },
    text: {
      color: theme[50],
      fontSize: 18,
      lineHeight: 18,
    },
    right: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 6,
      width,
    },
  });
};

export default styles;
