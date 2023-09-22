import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";
import { ButtonsSound } from "../../../components/ButtonsSound/ButtonsSound";

export function InfoDiafragmaticScreen() {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const navigation = useNavigation();

    const on = () => {
        setIsSoundOn(true);
    };

    const mute = () => {
        setIsSoundOn(false);
    };

    const navigateRespirate = () => {
        navigation.navigate('Diafragmatic');
    };

    const handleLinkPress = () => {
        const videoUrl = 'https://www.youtube.com/watch?v=Mu39nw6R0Lk'; // Substitua pela URL do seu vídeo no YouTube
        Linking.openURL(videoUrl);
    };

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <Text style={styles.title}>Técnica de Respiração: Diafragmática</Text>
            <Text style={styles.description}>
                Uma ótima técnica para acalmar a ansiedade mente e relaxar. Antes de começar com a respiração é necessário:
            </Text>
            <Text style={{fontSize: 15}}>
                1º: Comece sentando-se em postura reta, ou se preferir pode deitar-se. {'\n'}
                {'\n'}2º: Coloque a mão no abdômen(barriga) acima do umbigo e abaixo do seu peito.{'\n'}
                {'\n'}3º: Concentre-se na sua respiração.{'\n'}
                {'\n'}4º: Perceba que quando você inspira (puxa o ar) o abdômen desce e quando expira (solta o ar) o abdômen sobe.{'\n'}
                {'\n'}5º: Tente realizar o movimento contrário: o abdômen subir ao inspirar e descer ao expirar.{'\n'}
                {'\n'}6º: Agora que você já aprendeu as instruções, está pronto para começar?
            </Text>
            <View>
                <TouchableOpacity onPress={handleLinkPress}>
                    <Text style={stylesIns.linkText}>Preciso de ajuda com essa respiração</Text>
                </TouchableOpacity>
            </View>

            <ButtonsSound onFunction={on} offFunction={mute} />
            <Button text="Iniciar" onPress={navigateRespirate} style={stylesIns.buttonIni} />

            <View style={{flex: 1}}></View>    
            </ScrollView>

        </View>
    );
}

const stylesIns = StyleSheet.create({
    button: {
        width: 260,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    buttonIni: {
        width: 300,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    },

});
