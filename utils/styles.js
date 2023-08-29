import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 20
    },
    icon: {
        textAlign: 'center'
    },
    // Videos Style
    videoContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    videoTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    thumbnail: {
        width: 240,
        height: 160
    },
    // Cards Style
    containerCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
  