import { View, Text, ScrollView } from "react-native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { CardView } from "../components/CardView/CardView";
import { CardRecomendation } from "../components/CardRecomendation/CardRecomendation";

export function CalmScreen() {

    return (
        <View style={styles.container}>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="leaf" size={100} color={"black"} />
                <Text style={styles.title}>Acalme-se</Text>
                <Text style={styles.description}>
                    Aprenda técnicas de respiração para acalmar a mente e encontrar tranquilidade. Descubra recomendações para suas necessidades.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Respiração 4-7-8" navigate="InstructionFourSevenEight" bgColor='#B2BEB5'>
                        <CardRecomendation text="Foco" bgColor="#7393B3" />
                        <CardRecomendation text="Relaxamento" bgColor="#7393B3" />
                    </CardView>
                    <CardView title="Respiração Diafragmática" navigate="Diafragmatic" bgColor='#B2BEB5'>
                        <CardRecomendation text="Foco" bgColor="#7393B3" />
                        <CardRecomendation text="Relaxamento" bgColor="#7393B3" />
                    </CardView>
                    <CardView title="Respiração do Fogo (Mente Brilhante)" navigate="Fire" bgColor='#B2BEB5'>
                        <CardRecomendation text="Foco" bgColor="#7393B3" />
                        <CardRecomendation text="Relaxamento" bgColor="#7393B3" />
                    </CardView>
                    <CardView title="Respiração Pranayama Surya Bedhana" navigate="Pranayama" bgColor='#B2BEB5'>
                        <CardRecomendation text="Foco" bgColor="#7393B3" />
                        <CardRecomendation text="Relaxamento" bgColor="#7393B3" />
                    </CardView>
                </View>
            </ScrollView>
        </View>
    );
}