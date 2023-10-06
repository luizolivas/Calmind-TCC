import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

import { styles } from "../../utils/styles";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

const isTablet = Dimensions.get('window').width >= 600;

export function HelpContentElement({ name, color, title, navigationRoute, text }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={stylesHelpContent.contentView} onPress={() => navigation.navigate(navigationRoute)} >
            <Icon style={[styles.icon, { flex: 1 }]} name={name} size={ isTablet ? 80 : 65 } color={color} />
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
        marginBottom: isTablet ? 40 : 30,
        paddingBottom: isTablet ? 25 : 10,
        borderBottomWidth: isTablet ? 2 : 1
    },
    contentTitle: {
        textAlign: 'center',
        fontSize: isTablet ? 24 : 16,
        fontFamily: 'Roboto_700Bold',
        marginTop: isTablet ? 10 : 5
    },
    contentDescription: {
        flex: 1,
        textAlign: 'center',
        marginTop: isTablet ? 20 : 10,
        fontFamily: 'Roboto_400Regular',
        fontSize: isTablet ? 20 : 16
    }
})