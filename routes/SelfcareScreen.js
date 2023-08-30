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
                <Icon style={styles.icon} name="medkit" size={100} color={"#D22B2B"} />
                <Text style={styles.title}>Autocuidados</Text>
                <Text style={styles.description}>
                    Priorize seu bem-estar com nossas práticas de autocuidado.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Sofrologia" navigate="Sofrology" bgColor='#E1C16E'>
                        <CardRecomendation text="Fluxo Sanguíneo" bgColor="#DAA06D" />
                    </CardView>
                    <CardView title="Automassagem" navigate="Automassage" bgColor='#E1C16E'>
                        <CardRecomendation text="Relaxamento Muscular" bgColor="#DAA06D" />
                    </CardView>
                    <CardView title="Harmonizaçãpo dos Chakras" navigate="Harmonization" bgColor='#E1C16E'>
                        <CardRecomendation text="Foco" bgColor="#DAA06D" />
                        <CardRecomendation text="Sono" bgColor="#DAA06D" />
                    </CardView>
                </View>
            </ScrollView>
        </View>
    );
}