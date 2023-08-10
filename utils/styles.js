import { StyleSheet } from 'react-native';

import background from "../assets/background.gif";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    // Home Page
    sectionContainer: {
      flex: 1,
      padding: 10
    },
    contentSectionContainer: {
      flex: 1,
      alignItems: 'center'
    },
    helpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    contentHelpContainer: {
      marginLeft: 50,
      marginRight: 50,
      alignItems: 'center'
    }
});
  