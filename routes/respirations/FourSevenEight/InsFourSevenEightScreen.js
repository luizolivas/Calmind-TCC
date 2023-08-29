import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";

export function InsFourSevenEightScreen() {
    const [isSoundOn, setIsSoundOn] = useState(true);

    const navigation = useNavigation();

    const on = () => {
        setIsSoundOn(true);
    };

    const mute = () => {
        setIsSoundOn(false);
    };

    const navigateRespirate = () => {
        navigation.navigate('FourSevenEight', { isSoundOn });
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Técnica de Respiração: 4-7-8</Text>
            <Text style={styles.description}>
                Iremos ajudar você a realizar a técnica de respiração 4-7-8, uma ótima maneira de acalmar a mente e relaxar. Encontre um local tranquilo e sente-se ou deite-se confortavelmente.
            </Text>
            <View style={stylesIns.buttonSoundContainer}>
                <TouchableOpacity onPress={on} style={[stylesIns.buttonSound, isSoundOn && stylesIns.selectedButtonSound]}>
                    <Icon name="volume-up" size={50} color="black" />
                    <Text >Som ligado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={mute} style={[stylesIns.buttonSound, !isSoundOn && stylesIns.selectedButtonSound]}>
                    <Icon name="volume-off" size={50} color="black" />
                    <Text>Som desligado</Text>
                </TouchableOpacity>
            </View>
            <Button text="Iniciar" onPress={navigateRespirate} style={stylesIns.button}/>
            <View style={{flex: 1}}></View>
        </View>
    );
}

const stylesIns = StyleSheet.create({
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
    button: {
        width: 260,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    }
});
