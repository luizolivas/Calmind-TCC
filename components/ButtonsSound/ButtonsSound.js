import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

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
                <Icon name="volume-up" size={50} color="black" />
                <Text >Som Ligado</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={offFunctionHandler} style={[stylesButtonSound.buttonSound, !isSoundOn && stylesButtonSound.selectedButtonSound]}>
                <Icon name="volume-off" size={50} color="black" />
                <Text>Som Desligado</Text>
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
        height: 100,
    },
    selectedButtonSound: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
        elevation: 5
    },
})