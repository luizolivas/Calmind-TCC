import { TouchableOpacity, Text, StyleSheet } from "react-native";

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
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})