import { View, Text, FlatList, StyleSheet } from "react-native";

export function StepByStep({ list }) {

    const renderItem = ({ item, index }) => {
        return (
            <View style={stylesSteps.step}>
                <Text style={stylesSteps.stepTitle}>{`${index + 1}º Passo:`}</Text>
                <Text style={stylesSteps.stepText}>{item}</Text>
            </View>
        );
    };

    return (
        <View style={stylesSteps.stepsContainer}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
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
        flex: 1,
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