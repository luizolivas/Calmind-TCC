import { Text, Dimensions } from "react-native";

export function CardRecomendation({ text, bgColor }) {

    const isTablet = Dimensions.get('window').width >= 600;

    return (
        <Text style={{ fontSize: isTablet && 18, backgroundColor: bgColor, borderColor: 'black', borderRadius: 8, flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'Roboto_700Bold' }}>{text}</Text>
    );
}