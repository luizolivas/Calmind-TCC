import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from '@react-navigation/native';

// Styles
import { styles } from "../utils/styles";

// Components
import { ImageLogo } from "../components/ImageLogo/ImageLogo";

export function HomeScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ImageLogo />
            <Text>frase motivacional aqui</Text>
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Anxiety")}>
                    <Text>Aprenda sobre Ansiedade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Sound")}>
                    <Text>Relaxamento Sonoro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Podcast")}>
                    <Text>Podcasts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Calm")}>
                    <Text>Acalme-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Selfcare")}>
                    <Text>Autocuidados</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.helpContainer}>
                <TouchableOpacity style={styles.contentHelpContainer} onPress={() => navigation.navigate("Help")}>
                    <Text>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentHelpContainer} onPress={() => navigation.navigate("Talk")}>
                    <Text>Conversar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}