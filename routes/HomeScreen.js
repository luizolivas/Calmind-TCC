import { View, Text, TouchableOpacity, StyleSheet, Dimensions  } from "react-native";
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Api
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { ImageLogo } from "../components/ImageLogo/ImageLogo";

// Notification
import { setupNotificationHandling } from "../utils/notifications";

const isTablet = Dimensions.get('window').width >= 600;

export function HomeScreen() {

    const [quote, setQuote] = useState("Carregando frase..");
    const [author, setAuthor] = useState("Carregando autor..");

    const navigation = useNavigation();

    // Notification
    setupNotificationHandling(navigation)

    // Phrase logic
    const getQuote = async () => {
        const quotes = require('../utils/phrases.json');

        const randomIndex = Math.min(Math.floor(Math.random() * quotes.length), quotes.length - 1);

        return quotes[randomIndex];
    }

    useEffect(() => {

        const checkAndFetchQuote = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDate');

            // If is a new day is a new fetch
            if(lastFetchedDate !== currentDate) {
                const newQuote = await getQuote();

                if(newQuote.text) {
                    setQuote(newQuote.text);
                    setAuthor(newQuote.author);

                    await AsyncStorage.setItem('lastAuthor', newQuote.author);
                    await AsyncStorage.setItem('lastQuote', newQuote.text);
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
        <CustomGradient>
            <ImageLogo />
            <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_500Medium' }}>{quote}</Text>
            <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_500Medium', fontStyle: 'italic' }}>- {author}</Text>
            <View style={stylesHome.sectionContainer}>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Anxiety")}>
                    <Icon name="leanpub" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Aprenda sobre Ansiedade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Sound")}>
                    <Icon name="music" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Relaxamento Sonoro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Podcast")}>
                    <Icon name="headphones" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Podcasts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Calm")}>
                    <Icon name="leaf" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Acalme-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentSectionContainer} onPress={() => navigation.navigate("Selfcare")}>
                    <Icon name="medkit" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Autocuidados</Text>
                </TouchableOpacity>
            </View>
            <View style={stylesHome.helpContainer}>
                <TouchableOpacity style={stylesHome.contentHelpContainer} onPress={() => navigation.navigate("Help")}>
                    <Icon name="question-circle" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.contentHelpContainer} onPress={() => navigation.navigate("Talk")}>
                    <Icon name="comments" size={ isTablet ? 55 : 35 } color={baseColor} />
                    <Text style={{ fontSize: isTablet ? 20 : 12.5, fontFamily: 'Roboto_400Regular' }}>Conversar</Text>
                </TouchableOpacity>
            </View>
        </CustomGradient>
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