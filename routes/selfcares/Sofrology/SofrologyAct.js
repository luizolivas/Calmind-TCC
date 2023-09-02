import { View, Text } from "react-native";

import { styles } from "../../../utils/styles";

import { BackButton } from "../../../components/BackButton/BackButton";

export function SofrologyAct() {
    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Exercício Sofrologia</Text>
        </View>
    );
}