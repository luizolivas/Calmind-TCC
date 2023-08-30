import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";



// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";

export function InfoPranayamaScreen() {
    const navigation = useNavigation();

    const navigateRespirate = () => {
        navigation.navigate('FourSevenEight');
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Respiração das Narinas Alternadas (Nadi Shodhan Pranayama)</Text>
            <Text style={styles.description}>
                A respiração das narinas alternadas é uma técnica de respiração que visa equilibrar a energia do corpo, acalmar a mente e melhorar a concentração. 
            </Text>
            <View>
                <Image
                    style={{ width: 100, height: 100 }} // Defina os valores de largura e altura desejados
                    
                />
            </View>
            <Button text="Iniciar" onPress={navigateRespirate} style={stylesinfoPranayama.button} />
            <View style={{ flex: 1 }}></View>
        </View>
    );
}

const stylesinfoPranayama = StyleSheet.create({
    buttonSoundContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: 260,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    },
    imagee: {

    }
});
