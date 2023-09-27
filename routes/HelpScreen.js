import { View, Text, ScrollView, StyleSheet } from "react-native";

import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { HelpContentElement } from "../components/HelpContentElement/HelpContentElement";

export function HelpScreen() {
    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Icon style={styles.icon} name="question-circle" size={100} color={baseColor} />
                <Text style={styles.title}>Ajuda</Text>
                <Text style={styles.description}>
                    Explore nosso guia intuitivo para dominar todas as funcionalidades e aproveitar ao máximo nossa aplicação.
                </Text>
                <View style={stylesHelp.contentContainer}>
                    <HelpContentElement name="leanpub" color={baseColor} title="Aprenda sobre Ansiedade" navigationRoute="Anxiety" text=" Explore uma coleção de vídeos informativos cuidadosamente selecionados, destinados a fornecer uma compreensão profunda da ansiedade e suas nuances. Eduque-se e sinta-se capacitado para lidar com os desafios." />
                    <HelpContentElement name="music" color={baseColor} title="Relaxamento Sonoro" navigationRoute="Sound" text="Mergulhe em uma experiência imersiva de relaxamento com nossos vídeos de lo-fi, meditação e 432 Hz. Sintonize-se com frequências que promovem tranquilidade e paz interior, proporcionando um escape do ritmo acelerado." />
                    <HelpContentElement name="headphones" color={baseColor} title="Podcasts" navigationRoute="Podcast" text="Enriqueça sua jornada de autodescoberta com podcasts envolventes que abordam questões relacionadas à ansiedade. Ouça vozes especializadas, compartilhando insights, histórias inspiradoras e estratégias práticas." />
                    <HelpContentElement name="leaf" color={baseColor} title="Acalme-se" navigationRoute="Calm" text="Descubra um conjunto de técnicas de respiração projetadas para acalmar a mente, reduzir o estresse e melhorar a qualidade de vida. Pratique regularmente para colher os benefícios de uma mente mais serena." />
                    <HelpContentElement name="medkit" color={baseColor} title="Autocuidados" navigationRoute="Selfcare" text="Reconheça a importância do autocuidado em sua jornada. Explore recursos, dicas e atividades que incentivam uma rotina saudável e equilibrada, centrada no seu bem-estar." />
                    <HelpContentElement name="comments" color={baseColor} title="Conversar" navigationRoute="Talk" text="Quando a necessidade de compartilhar torna-se urgente, nossa seção de conversas oferece acesso rápido ao CVV (Centro de Valorização da Vida) na seção de chat online ou à possibilidade de fazer uma ligação direta. Priorize sua saúde mental e emocional." />
                </View>
            </ScrollView>
        </CustomGradient>
    );
}

const stylesHelp = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
})