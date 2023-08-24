import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

import { BackButton } from "../components/BackButton/BackButton";

export function CalmScreen() {


    return (
        <View style={styles.container}>
            <BackButton />
            <Icon style={styles.icon} name="leaf" size={100} color={"black"} />
            <Text style={styles.title}>Acalme-se</Text>
            <Text style={styles.description}>
                Técnicas de respiração é uma das melhores formas de tranquilizar a mente e acalmar os pensamentos. Confira as recomendações de cada e experimente a que mais se adeque á sua necessidade
            </Text>
            <View style={stylesCalm.card}>
                <View style={stylesCalm.cardInside}>
                    <Text style={stylesCalm.title}>Respiração 4-7-8</Text>
                    <Text style={stylesCalm.description}>Recomendações: {'\n'}
                     • {'\n'}
                     •
                     </Text>

                </View>
            </View>
        </View>
    );
}

const stylesCalm = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 8,
        width: 300,
        margin: 16,
        backgroundColor: '#E0E0E0',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
    },
    description: {
        fontSize: 14,
    },
});
