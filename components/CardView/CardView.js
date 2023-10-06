import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button/Button";

const isTablet = Dimensions.get('window').width >= 600;

export function CardView({ children, title, navigate, bgColor }) {

    const navigation = useNavigation();

    return (
        <View style={[ stylesCard.card, { backgroundColor: bgColor } ]}>
            <View>
                <Text style={stylesCard.title}>{title}</Text>
                <Text style={stylesCard.recomendation}>Recomendações</Text>
                <View style={stylesCard.cardContentContainer}>
                    {children} 
                </View>
                <Button text="Escolher" onPress={() => navigation.navigate(navigate)} style={{ backgroundColor: "#50C878", marginTop: 5 }} />
            </View>
        </View>
    );
}

const stylesCard = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#1f1f1f',
        borderRadius: 8,
        width: isTablet ? 340 : 230,
        marginBottom: isTablet ? 40 : 20,
        marginTop: isTablet && 10,
        padding: isTablet ? 20 : 16,
        ...Platform.select({
            android: {
                elevation: 5
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            }
        })
    },
    title: {
        color: 'white',
        fontSize: isTablet ? 22 : 18,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        paddingBottom: 8,
        textAlign: 'center'
    },
    recomendation: {
        color: 'white',
        fontSize: isTablet ? 20 : 14,
        fontFamily: 'Roboto_500Medium',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: isTablet ? 10 : 5
    },
    cardContentContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: isTablet ? 10: 5
    }
});
