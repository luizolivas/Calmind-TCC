import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function CardView({ children, title, navigate }) {

    const navigation = useNavigation();

    return (
        <View style={stylesCard.card}>
            <View style={stylesCard.cardInside}>
                <Text style={stylesCard.title}>{title}</Text>
                <Text style={stylesCard.description}>Recomendações:</Text>
                    {children} 
                <TouchableOpacity style={stylesCard.touchableButton} onPress={() => navigation.navigate(navigate)}>
                    <Text style={stylesCard.buttonText}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesCard = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 8,
        width: 230,
        marginBottom: 20,
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
        backgroundColor: '#00ff91',
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
