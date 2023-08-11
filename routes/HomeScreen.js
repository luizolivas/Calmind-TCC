import { View, Text, TouchableOpacity } from "react-native";
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

export function HomeScreen() {

    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    const navigation = useNavigation();

    // Phrase logic
    const getQuote = async () => {
        try {
            const response = await axios.get('https://zenquotes.io/api/random');
            return response.data[0];
        } catch (error) {
            console.error('Error fetching quote:', error);
            return null;
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
            <Text style={{fontSize: 12.5, fontWeight: 500}}>'{quote}'</Text>
            <Text style={{fontSize: 12.5, fontStyle: 'italic'}}>- {author}</Text>
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