import { View, Text, StyleSheet } from "react-native";

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
        alignItems: 'center'
    },
    step: {
        marginVertical: 10
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    stepText: {
        fontSize: 18
    }
})