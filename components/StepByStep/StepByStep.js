import { View, Text, StyleSheet, Dimensions } from "react-native";

const isTablet = Dimensions.get('window').width >= 600;

export function StepByStep({ list }) {
    return (
        <View style={stylesSteps.stepsContainer}>
            {list.map((item, index) => (
                <View key={index} style={stylesSteps.step}>
                    <Text style={stylesSteps.stepTitle}>{`${index + 1}º Passo:`}</Text>
                    <Text style={stylesSteps.stepText}>{item}</Text>
                </View>
            ))}
        </View>
    );
}

const stylesSteps = StyleSheet.create({
    stepsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    step: {
        marginVertical: isTablet ? 20 : 10
    },
    stepTitle: {
        fontSize: isTablet ? 22 : 18,
        fontFamily: 'Roboto_700Bold',
        marginBottom: isTablet ? 15 : 10
    },
    stepText: {
        fontSize: isTablet ? 22 : 18,
        fontFamily: 'Roboto_400Regular'
    }
})