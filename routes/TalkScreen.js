import { View, Text, StyleSheet, TouchableOpacity, Linking  } from "react-native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

import { BackButton } from "../components/BackButton/BackButton";

export function TalkScreen() {

    const openChat = () => {
        Linking.openURL('https://www.cvv.org.br/chat/'); 
    }

    const openCall = () => {
        const phoneNumber = '188'; 
        Linking.openURL(`tel:${phoneNumber}`);
    }

    return (
        <View style={styles.container}>
            <BackButton />
            <Icon style={styles.icon} name="comments" size={100} color={"#B2BEB5"} />
            <Text style={styles.title}>Conversar</Text>
            <Text style={styles.description}>
                Saiba que você não está passando por isso sozinho! O CVV – Centro de Valorização da Vida, um espaço seguro e confidencial, está pronto para ouvir você com empatia e carinho.
            </Text>
            <View style={stylesTalk.buttonContainer}>
                <TouchableOpacity onPress={openChat} style={stylesTalk.button}>
                    <Icon name="comments-o" size={90} color={"black"} />
                    <Text style={styles.description}>Chat online</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openCall} style={stylesTalk.button}>
                    <Icon name="phone-square" size={90} color={"black"} />
                    <Text style={styles.description}>Ligue</Text> 
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}></View>
        </View>
    );
}

const stylesTalk = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center'
    }
});
