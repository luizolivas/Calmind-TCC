import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";
import CustomGradient from "../../../utils/CustomGradient";


import { useNavigation } from "@react-navigation/native";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";
import { ButtonsSound } from "../../../components/ButtonsSound/ButtonsSound";

const isTablet = Dimensions.get('window').width >= 600;

export function InsFourSevenEightScreen() {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const navigation = useNavigation();

    const on = () => {
        setIsSoundOn(true);
    };

    const mute = () => {
        setIsSoundOn(false);
    };

    return (
        <CustomGradient>
            <BackButton />
            <Text style={styles.title}>Técnica de Respiração: 4-7-8</Text>
            <Text style={styles.description}>
                Iremos ajudar você a realizar a técnica de respiração 4-7-8, uma ótima maneira de acalmar a mente e relaxar. Encontre um local tranquilo e sente-se ou deite-se confortavelmente. Você será convidado(a) a inspirar, segurar o ar e depois expirar por um certo tempo e ritmo.
            </Text>
            <ButtonsSound onFunction={on} offFunction={mute} />
            <Button text="Iniciar" onPress={() => navigation.navigate('FourSevenEight', { isSoundOn })} style={stylesIns.button}/>
            <View style={{flex: 1}}></View>
        </CustomGradient>
    );
}

const stylesIns = StyleSheet.create({
    button: {
        width: isTablet ? 350 : 260,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    }
});
