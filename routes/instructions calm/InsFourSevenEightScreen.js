import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';

import { styles } from "../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

import { BackButton } from "../../components/BackButton/BackButton";

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

            <View style={stylesCalm.soundButtonsContainer}>
                <TouchableOpacity onPress={on} style={[stylesCalm.button, isSoundOn && stylesCalm.selectedButton]}>
                    <Icon name="volume-up" size={50} color="black" />
                    <Text >Som ligado</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={mute} style={[stylesCalm.button, !isSoundOn && stylesCalm.selectedButton]}>
                    <Icon name="volume-off" size={50} color="black" />
                    <Text style={stylesCalm.soundButtonText}>Som desligado</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={stylesCalm.touchableButton} onPress={navigateRespirate} >
                    <Text style={stylesCalm.buttonText}>Começar</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}></View>
        </View>
    );


}

const stylesCalm = StyleSheet.create({
    stepsContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    card: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 8,
        width: 230,
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#E0E0E0',
        
    },
    touchableButton: {
        backgroundColor: '#00ff91',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 260,
        height: 60,
        marginTop: 50
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    soundButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        alignItems: 'center',
        flex: 1,
        
    },
    selectedButton: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
    },
});
