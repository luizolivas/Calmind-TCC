import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    // Screens Utils
    backContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      alignSelf: 'flex-start', 
      marginLeft: 0, 
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
    }
});
  