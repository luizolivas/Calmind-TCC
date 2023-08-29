import { Text } from "react-native";

export function CardRecomendation({ text, bgColor }) {
    return (
        <Text style={{backgroundColor: bgColor, borderColor: 'black', borderRadius: 8, flex: 1, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>{text}</Text>
    );
}