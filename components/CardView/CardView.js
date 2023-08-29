import { View, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button/Button";

export function CardView({ children, title, navigate, bgColor }) {

    const navigation = useNavigation();

    return (
        <View style={[stylesCard.card, {backgroundColor: bgColor}]}>
            <View>
                <Text style={stylesCard.title}>{title}</Text>
                <Text style={stylesCard.description}>Recomendações:</Text>
                    {children} 
                <Button text="Escolher" onPress={() => navigation.navigate(navigate)} style={{backgroundColor: "#50C878"}} />
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
        padding: 16
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    description: {
        color: 'white',
        fontSize: 14,
        marginVertical: 5
    }
});
