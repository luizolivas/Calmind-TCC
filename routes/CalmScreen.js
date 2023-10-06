import { View, Text, ScrollView, Dimensions } from "react-native";

import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { CardView } from "../components/CardView/CardView";
import { CardRecomendation } from "../components/CardRecomendation/CardRecomendation";

const isTablet = Dimensions.get('window').width >= 600;

export function CalmScreen() {
    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="leaf" size={ isTablet ? 120 : 100 } color={baseColor} />
                <Text style={styles.title}>Acalme-se</Text>
                <Text style={styles.description}>
                    Aprenda técnicas de respiração para acalmar a mente e encontrar tranquilidade. Descubra recomendações para suas necessidades.
                </Text>
                <View style={styles.containerCards}>
                    <CardView title="Respiração 4-7-8" navigate="InstructionFourSevenEight" bgColor='#B2BEB5'>
                        <CardRecomendation text="Acalmar" bgColor={baseColor} />
                        <CardRecomendation text="Relaxar" bgColor={baseColor} />
                    </CardView>
                    <CardView title="Respiração Diafragmática" navigate="InfoDiafragmatic" bgColor='#B2BEB5'>
                        <CardRecomendation text="Equilibrio" bgColor={baseColor} />
                        <CardRecomendation text="Clareza  Mental" bgColor={baseColor} />
                    </CardView>
                    <CardView title="Respiração das Narinas Alternadas (Nadi Shodhan Pranayama)" navigate="PranayamaInfo" bgColor='#B2BEB5'>
                        <CardRecomendation text="Reduz Estresse" bgColor={baseColor} />
                        <CardRecomendation text="Acalmar" bgColor={baseColor} />
                    </CardView>
                </View>
            </ScrollView>
        </CustomGradient>
    );
}