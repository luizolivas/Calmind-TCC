import { View, Text } from "react-native";

import { styles } from "../../../utils/styles";

import { BackButton } from "../../../components/BackButton/BackButton";

export function Sofrology() {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Sofrologia</Text>
            <Text style={styles.description}>
                A sofrologia é uma prática que combina elementos da psicologia, relaxamento e técnicas de mindfulness para promover o bem-estar mental e físico.
            </Text>
        </View>
    );
}