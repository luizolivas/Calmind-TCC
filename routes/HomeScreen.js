import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { styles } from "../utils/styles";

// Api
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { ImageLogo } from "../components/ImageLogo/ImageLogo";

// Notification
import { setupNotificationHandling } from "../utils/notifications";

export function HomeScreen() {

    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    const navigation = useNavigation();

    // Notification
    setupNotificationHandling(navigation)

    // Phrase logic
    const getQuote = async () => {
        try {
            const response = await axios.get('https://zenquotes.io/api/random');
            return response.data[0];
        } catch (error) {
            console.error('Error fetching quote:', error);
            return;
        }
    }

    const translateQuote = async (quote) => {
        try {
            const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(quote)}`);
            const translatedQuote = response.data[0][0][0];
            return translatedQuote;
        } catch (error) {
            console.error('Error translating quote:', error);
            return null;
        }
    }

    useEffect(() => {

        const checkAndFetchQuote = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDate');

            // If is a new day is a new fetch
            if(lastFetchedDate !== currentDate) {
                const newQuote = await getQuote();

                if(newQuote.q) {
                    const translatedQuote = await translateQuote(newQuote.q);
                    setQuote(translatedQuote);
                    setAuthor(newQuote.a);

                    await AsyncStorage.setItem('lastAuthor', newQuote.a);
                    await AsyncStorage.setItem('lastQuote', translatedQuote);
                    await AsyncStorage.setItem('lastFetchedDate', currentDate);
                }
            } else {
                // Define a last res API
                const lastQuote = await AsyncStorage.getItem('lastQuote');
                const lastAuthor = await AsyncStorage.getItem('lastAuthor');

                setQuote(lastQuote);
                setAuthor(lastAuthor);
            }

        }

        checkAndFetchQuote();

    }, [])

    return (
        <View style={styles.container}>
            <ImageLogo />
            <Text style={{fontSize: 12.5, fontFamily: 'Roboto_500Medium'}}>'{quote}'</Text>
            <Text style={{fontSize: 12.5, fontFamily: 'Roboto_500Medium', fontStyle: 'italic'}}>- {author}</Text>
            <View style={stylesHome.sectionContainer}>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Anxiety")}>
                    <Icon name="leanpub" size={35} color={"#DB8946"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Aprenda sobre Ansiedade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Sound")}>
                    <Icon name="music" size={35} color={"#B34BD6"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Relaxamento Sonoro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Podcast")}>
                    <Icon name="headphones" size={35} color={"#4441F2"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Podcasts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Calm")}>
                    <Icon name="leaf" size={35} color={"#50C878"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Acalme-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Selfcare")}>
                    <Icon name="medkit" size={35} color={"#D22B2B"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Autocuidados</Text>
                </TouchableOpacity>
            </View>
            <View style={stylesHome.helpContainer}>
                <TouchableOpacity style={stylesHome.contentHelpContainer} onPress={() => navigation.navigate("Help")}>
                    <Icon name="question-circle" size={35} color={"#242423"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentHelpContainer} onPress={() => navigation.navigate("Talk")}>
                    <Icon name="comments" size={35} color={"#B2BEB5"} />
                    <Text style={{ fontFamily: 'Roboto_400Regular' }}>Conversar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesHome = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10
    },
    contentSectionContainer: {
        flex: 1,
        alignItems: 'center'
    },
    helpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contentHelpContainer: {
        flex: 1,
        alignItems: 'center'
    }
});