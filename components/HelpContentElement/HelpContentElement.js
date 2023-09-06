import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { styles } from "../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

export function HelpContentElement({ name, color, title, navigationRoute, text }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={stylesHelpContent.contentView} onPress={() => navigation.navigate(navigationRoute)} >
            <Icon style={[styles.icon, { flex: 1 }]} name={name} size={65} color={color} />
            <Text style={stylesHelpContent.contentTitle}>{title}</Text>
            <Text style={stylesHelpContent.contentDescription}>{text}</Text>
        </TouchableOpacity>
    );
}

const stylesHelpContent = StyleSheet.create({
    contentView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 30,
        paddingBottom: 10,
        borderBottomWidth: 1
    },
    contentTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Roboto_700Bold',
        marginTop: 5
    },
    contentDescription: {
        flex: 1,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16
    }
})