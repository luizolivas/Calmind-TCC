import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from "react-native";
import { useState } from 'react';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

const isTablet = Dimensions.get('window').width >= 600;

export function ButtonsSound({ onFunction, offFunction }) {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const onFunctionHandler = () => {
        onFunction()
        setIsSoundOn(true)
    }

    const offFunctionHandler = () => {
        offFunction()
        setIsSoundOn(false)
    }

    return (
        <View style={stylesButtonSound.buttonSoundContainer}>
            <TouchableOpacity onPress={onFunctionHandler} style={[stylesButtonSound.buttonSound, isSoundOn && stylesButtonSound.selectedButtonSound]}>
                <Icon name="volume-up" size={ isTablet ? 70 : 50} color="black" />
                <Text style={{ fontSize: isTablet ? 20 : 15, fontFamily: 'Roboto_500Medium' }}>Som Ligado</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={offFunctionHandler} style={[stylesButtonSound.buttonSound, !isSoundOn && stylesButtonSound.selectedButtonSound]}>
                <Icon name="volume-off" size={ isTablet ? 70 : 50} color="black" />
                <Text style={{ fontSize: isTablet ? 20 : 15, fontFamily: 'Roboto_500Medium' }}>Som Desligado</Text>
            </TouchableOpacity>
        </View>
    );
}

const stylesButtonSound = StyleSheet.create({
    buttonSoundContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonSound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: isTablet ? 150 : 100
    },
    selectedButtonSound: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
        ...Platform.select({
            android: {
                elevation: 5
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            }
        })
    },
})