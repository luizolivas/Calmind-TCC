import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: 24,
        marginVertical: 20
    },
    description: {
        textAlign: 'center',
        fontFamily: 'Roboto_400Regular',
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
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        fontWeight: 'bold'
    },
    thumbnail: {
        width: 240,
        height: 160,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    // Cards Style
    containerCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Button back
    buttonGoBack: {
        backgroundColor: 'red',
        width: 150,
        height: 60,
        marginTop: 50,
        marginBottom: 10,
    }
});
  