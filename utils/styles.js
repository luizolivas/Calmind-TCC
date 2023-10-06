import { StyleSheet, Dimensions } from 'react-native';

const isTablet = Dimensions.get('window').width >= 600;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: isTablet ? 70 : 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Roboto_700Bold',
        fontSize: isTablet ? 30 : 24,
        marginVertical: 20
    },
    description: {
        textAlign: 'center',
        fontFamily: 'Roboto_400Regular',
        fontSize: isTablet ? 22 : 18,
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
        fontSize: isTablet ? 26 : 20,
        fontWeight: 'bold'
    },
    thumbnail: {
        width: isTablet ? 360 : 240,
        height: isTablet ? 220 : 160,
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
  