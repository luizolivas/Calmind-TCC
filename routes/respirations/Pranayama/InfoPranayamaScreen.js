import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from "react-native";
import { useState } from 'react';

import { styles } from "../../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

import hand from "../../../assets/hand.jpg"
import stepOne from "../../../assets/stepOne.jpg"



// Components
import { BackButton } from "../../../components/BackButton/BackButton";
import { Button } from "../../../components/Button/Button";

export function InfoPranayamaScreen() {
    const navigation = useNavigation();

    const navigateRespirate = () => {
        navigation.navigate('Pranayama');
    };

    const handleLinkPress = () => {
        const videoUrl = 'https://www.youtube.com/watch?v=1mYwMyoh9sI'; // Substitua pela URL do seu vídeo no YouTube
        Linking.openURL(videoUrl);
    };

    return (
        <View style={styles.container}>
            <BackButton />
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Respiração das Narinas Alternadas (Nadi Shodhan Pranayama)</Text>
                <Text style={styles.description}>
                    A respiração das narinas alternadas é uma técnica de respiração que visa equilibrar a energia do corpo, acalmar a mente e melhorar a concentração.
                </Text>
                <Text style={stylesinfoPranayama.instruction}>COMO FAZER?</Text>
                <View style={stylesinfoPranayama.container}>
                    

                    <Image source={stepOne} style={{ width: 250, height: 150 }} />
                    <View style={stylesinfoPranayama.innerCard}> 
                        <Text style={stylesinfoPranayama.text}>Para começar, sente-se confortavelmente com a coluna reta e relaxada, ems seguida verifique a numeração dos dedos na imagem abaixo e posicione em você conforme imagem acima, assim que estiver pronto clique em "Iniciar".</Text>
                        <Image source={hand} style={{ width: 200, height: 200 }} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={handleLinkPress}>
                        <Text style={stylesinfoPranayama.linkText}>Preciso de ajuda com essa respiração</Text>
                    </TouchableOpacity>
                </View>

                <Button text="Iniciar" onPress={navigateRespirate} style={stylesinfoPranayama.button} />
                <View style={{ flex: 1 }}></View>
            </ScrollView>
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
        width: 300,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1, 
      },
      text: {
        textAlign: 'justify',
        width: 250,
      },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 10,
    },
    innerCard: {
        borderRadius: 10,

        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      instruction: {
        fontSize: 18,
        fontWeight: 'bold', 
        backgroundColor: '#50C878',
        color: 'white', 
        padding: 8, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        textAlign: 'center',
      },
});
