import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../utils/styles";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { ImageLogo } from "../components/ImageLogo/ImageLogo";

export function HomeScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ImageLogo />
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Anxiety")}>
                    <Icon name="leanpub" size={35} color={"black"} />
                    <Text>Aprenda sobre Ansiedade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Sound")}>
                    <Icon name="music" size={35} color={"black"} />
                    <Text>Relaxamento Sonoro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Podcast")}>
                    <Icon name="headphones" size={35} color={"black"} />
                    <Text>Podcasts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Calm")}>
                    <Icon name="heartbeat" size={35} color={"black"} />
                    <Text>Acalme-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentSectionContainer} onPress={() => navigation.navigate("Selfcare")}>
                    <Icon name="medkit" size={35} color={"black"} />
                    <Text>Autocuidados</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.helpContainer}>
                <TouchableOpacity style={styles.contentHelpContainer} onPress={() => navigation.navigate("Help")}>
                    <Icon name="question-circle" size={35} color={"black"} />
                    <Text>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentHelpContainer} onPress={() => navigation.navigate("Talk")}>
                    <Icon name="comments" size={35} color={"black"} />
                    <Text>Conversar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}