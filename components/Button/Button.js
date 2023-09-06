import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

export function Button({ text, onPress, style }) {
    return (
        <TouchableOpacity style={[stylesButton.button, style]} onPress={onPress}>
            <Text style={stylesButton.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const stylesButton = StyleSheet.create({
    button: {
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})