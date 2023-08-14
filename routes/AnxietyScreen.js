import { View, Text  } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "../utils/styles";

// Api
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

export function AnxietyScreen() {

    const [videos, setVideos] = useState([]);

    const fetchAnxietyVideos = async () => {
        try {
            const apiKey = 'AIzaSyBrsWY3n5sCkIXqI8h4JF8Ea29axOHw2cw';
            const searchQuery = 'ansiedade';
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}`);

            return response.data.items;
        } catch (error) {
            console.error('Error fetching anxiety videos:', error);
            return;
        }
    };

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDateAnxiety');

            // If is a new day is a new fetch
            if(lastFetchedDate !== currentDate) {
                const anxietyVideos = await fetchAnxietyVideos();
                
                if(anxietyVideos) {
                    setVideos(anxietyVideos);

                    await AsyncStorage.setItem('lastVideosAnxiety', anxietyVideos);
                    await AsyncStorage.setItem('lastFetchedDateAnxiety', currentDate);
                }
            } else {
                // Define a last res API
                const anxietyVideos = await AsyncStorage.getItem('lastVideosAnxiety');

                setVideos(anxietyVideos);
            }

        }

        checkAndFetchVideo();

    }, []);

    return (
        <View style={styles.container}>
            <BackButton />
            <Icon name="leanpub" size={100} color={"black"} />
            <Text style={styles.title}>Aprenda sobre Ansiedade</Text>
            <Text style={styles.description}>
                Nesta seção você irá aprender o que de fato é a ansiedade, quais suas possíveis causas e também maneiras de alivia-la.
            </Text>
            {videos ? (
                <VideoList videos={videos} />
            )
            : (
                <Text>Carregando vídeos...</Text>
            )}
        </View>
    );
}