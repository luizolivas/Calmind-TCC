import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";
import CustomGradient from "../../../utils/CustomGradient";

import { useNavigation } from "@react-navigation/native";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";
import { ButtonsSound } from "../../../components/ButtonsSound/ButtonsSound";

export function Sofrology() {

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Sofrologia</Text>
                <Text style={styles.description}>
                    A Sofrologia é uma prática que combina elementos da psicologia, relaxamento e técnicas de mindfulness para promover o bem-estar mental e físico.
                </Text>
                <Text style={styles.description}>
                    O objetivo deste exercício é liberar a tensão muscular e alcançar um estado de relaxamento profundo.
                </Text>
                <Text style={styles.description}>
                    Lembrando de que a prática regular desses exercícios pode levar a benefícios crescentes ao longo do tempo. Se possível, experimente diferentes variações e durações para descobrir o que funciona melhor para você.
                </Text>
                <ButtonsSound onFunction={on} offFunction={mute} />
                <View style={{ alignItems: 'center' }}>
                    <Button text="Iniciar" onPress={() => navigation.navigate('SofrologyAct', { isSoundOn })} style={stylesSofrology.button}/>
                </View>
            </ScrollView>
        </CustomGradient>
    );
}

const stylesSofrology = StyleSheet.create({
    button: {
        width: 260,
        height: 60,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: "#50C878"
    }
})