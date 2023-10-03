import { View, Text, StyleSheet,TouchableOpacity, ScrollView, Linking } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";
import CustomGradient from "../../../utils/CustomGradient";

import { useNavigation } from "@react-navigation/native";

// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";
import { ButtonsSound } from "../../../components/ButtonsSound/ButtonsSound";

function InfoDiafragmaticScreen() {

    const [isSoundOn, setIsSoundOn] = useState(true);

    const navigation = useNavigation();

    const on = () => {
        setIsSoundOn(true);
    };

    const mute = () => {
        setIsSoundOn(false);
    };

    const navigateRespirate = () => {
        navigation.navigate('Diafragmatic', { isSoundOn });
    };

    const handleLinkPress = () => {
        const videoUrl = 'https://www.youtube.com/watch?v=Mu39nw6R0Lk';
        Linking.openURL(videoUrl);
    };

    return (
        <CustomGradient>
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
                <Button text="Iniciar" onPress={navigateRespirate} style={stylesIns.button} />
                <View style={{flex: 1}}></View>    
            </ScrollView>
        </CustomGradient>
    );
}

export default InfoDiafragmaticScreen

const stylesIns = StyleSheet.create({
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    button: {
        width: 280,
        height: 60,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: "#50C878"
    }
});
