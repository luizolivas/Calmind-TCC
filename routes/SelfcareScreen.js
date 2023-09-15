import { View, Text, ScrollView } from "react-native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { CardView } from "../components/CardView/CardView";
import { CardRecomendation } from "../components/CardRecomendation/CardRecomendation";

export function SelfcareScreen() {

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="medkit" size={100} color={"#007ACC"} />
                <Text style={styles.title}>Autocuidados</Text>
                <Text style={styles.description}>
                    Priorize seu bem-estar com nossas práticas de autocuidado.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Sofrologia" navigate="Sofrology" bgColor='#B2BEB5'>
                        <CardRecomendation text="Relaxamento Geral" bgColor="#007ACC" />
                    </CardView>
                    <CardView title="Automassagem" navigate="Automassage" bgColor='#B2BEB5'>
                        <CardRecomendation text="Relaxamento Muscular" bgColor="#007ACC" />
                    </CardView>
                </View>
            </ScrollView>
        </View>
    );
}