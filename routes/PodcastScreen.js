import { View, Text } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "../utils/styles";

// Api
import { fetchVideos } from "../utils/fetchVideos";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

export function PodcastScreen() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDatePodcast');

            // If is a new day is a new fetch
            if (lastFetchedDate !== currentDate) {
                const podcastVideos = await fetchVideos('podcast ansiedade');
                
                if(podcastVideos) {
                    setVideos(podcastVideos);

                    await AsyncStorage.setItem('lastVideosPodcast', JSON.stringify(podcastVideos));
                    await AsyncStorage.setItem('lastFetchedDatePodcast', currentDate);
                }
            } else {
                // Define a last res API
                const podcastVideos = await AsyncStorage.getItem('lastVideosPodcast');

                setVideos(JSON.parse(podcastVideos));
            }
        }

        checkAndFetchVideo();

    }, []);

    return (
        <View style={styles.container}>
            <BackButton />
            <Icon name="headphones" size={100} color={"black"} />
            <Text style={styles.title}>Podcasts</Text>
            <Text style={styles.description}>
                Confira alguns dos podcasts mais recomendados abaixo:
            </Text>
            {videos ? (
                <VideoList videos={videos} />
            )
            : (
                <Text style={{flex: 1, marginTop: 50}}>Carregando vídeos...</Text>
            )}
        </View>
    );
}