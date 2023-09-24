import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from "react-native";

import { styles } from "../../../utils/styles";
import CustomGradient from "../../../utils/CustomGradient";

import { useNavigation } from "@react-navigation/native";

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
        const videoUrl = 'https://www.youtube.com/watch?v=1mYwMyoh9sI';
        Linking.openURL(videoUrl);
    };

    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Respiração das Narinas Alternadas (Nadi Shodhan Pranayama)</Text>
                <Text style={styles.description}>
                    A respiração das narinas alternadas é uma técnica de respiração que visa equilibrar a energia do corpo, acalmar a mente e melhorar a concentração.
                </Text>
                <View style={{ alignItems: 'center' }}>
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
                </View>
                <View style={{ flex: 1 }}></View>
            </ScrollView>
        </CustomGradient>
    );
}

const stylesinfoPranayama = StyleSheet.create({
    container: {
        flex: 1,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1, 
      },
    text: {
        textAlign: 'justify',
        marginVertical: 10
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
        width: 280,
        fontSize: 18,
        fontWeight: 'bold', 
        backgroundColor: 'grey',
        color: 'white', 
        padding: 8, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        textAlign: 'center',
    },
    button: {
        width: 280,
        height: 60,
        marginTop: 50,
        backgroundColor: "#50C878"
    }
});
