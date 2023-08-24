import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

import { BackButton } from "../components/BackButton/BackButton";

export function SelfcareScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView>
                <Icon style={styles.icon} name="medkit" size={100} color={"black"} />
                <Text style={styles.title}>Autocuidados</Text>
                <Text style={styles.description}>
                    Priorize seu bem-estar com nossas práticas de autocuidado.</Text>
                <View style={stylesCalm.card}>
                    <View style={stylesCalm.cardInside}>
                        <Text style={stylesCalm.title}></Text>
                        <Text style={stylesCalm.description}>Recomendações: {'\n'}
                            • {'\n'}
                            • {'\n'}
                            • {'\n'}
                        </Text>
                        <TouchableOpacity style={stylesCalm.touchableButton} onPress={() => navigation.navigate("")}>
                            <Text style={stylesCalm.buttonText}>Começar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={stylesCalm.card}>
                    <View style={stylesCalm.cardInside}>
                        <Text style={stylesCalm.title}></Text>
                        <Text style={stylesCalm.description}>Recomendações: {'\n'}
                            • {'\n'}
                            • {'\n'}
                            • {'\n'}
                        </Text>
                        <TouchableOpacity style={stylesCalm.touchableButton} onPress={() => navigation.navigate("")}>
                            <Text style={stylesCalm.buttonText}>Começar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

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
        width: 230,
        margin: 16,
        padding: 16,
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
    touchableButton: {
        backgroundColor: '#0099ff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
