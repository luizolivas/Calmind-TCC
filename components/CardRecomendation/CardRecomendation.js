import { View, Text, Dimensions } from "react-native";

const isTablet = Dimensions.get('window').width >= 600;

export function CardRecomendation({ text, bgColor }) {
    return (
        <View style={{ fontSize: isTablet ? 18 : 14, backgroundColor: bgColor, borderColor: 'black', borderRadius: 8, flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'Roboto_700Bold' }}>
            <Text style={{ fontSize: isTablet ? 18 : 14, backgroundColor: bgColor, borderColor: 'black', borderRadius: 8, flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white', fontFamily: 'Roboto_700Bold' }}>{text}</Text>
        </View>
    );
}