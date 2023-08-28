import { View, Text, ScrollView } from "react-native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { CardView } from "../components/CardView/CardView";

export function SelfcareScreen() {

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="medkit" size={100} color={"black"} />
                <Text style={styles.title}>Autocuidados</Text>
                <Text style={styles.description}>
                    Priorize seu bem-estar com nossas práticas de autocuidado.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Sofrologia" navigate="Sofrology">
                    </CardView>
                    <CardView title="Automassagem" navigate="Automassage">
                    </CardView>
                    <CardView title="Harmonizaçãpo dos Chakras" navigate="Harmonization">
                    </CardView>
                </View>
            </ScrollView>
        </View>
    );
}