import { View, Text, ScrollView, ActivityIndicator, Dimensions } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";

// Api
import { fetchVideos } from "../utils/fetchVideos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomGradient from "../utils/CustomGradient";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

export function PodcastScreen() {

    const isTablet = Dimensions.get('window').width >= 600;

    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDatePodcast');

            // If is a new day is a new fetch
            if (lastFetchedDate !== currentDate) {
                const podcastVideos = await fetchVideos('podcast ansiedade', 10);
                
                if(podcastVideos) {
                    setVideos(podcastVideos);

                    await AsyncStorage.setItem('lastVideosPodcast', JSON.stringify(podcastVideos));
                    await AsyncStorage.setItem('lastFetchedDatePodcast', currentDate);

                    setIsLoading(false);
                }
            } else {
                // Define a last res API
                const podcastVideos = await AsyncStorage.getItem('lastVideosPodcast');

                setVideos(JSON.parse(podcastVideos));

                setIsLoading(false);
            }
        }

        checkAndFetchVideo();

    }, []);

    return (
        <CustomGradient>
            <BackButton />
            {isLoading ? (
                <ActivityIndicator size="large" color={baseColor} style={{ flex: 1 }} />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Icon style={styles.icon} name="headphones" size={ isTablet ? 120 : 100 } color={baseColor} />
                    <Text style={styles.title}>Podcasts</Text>
                    <Text style={styles.description}>
                        Confira alguns dos podcasts mais recomendados abaixo:
                    </Text>
                    <View>
                        {videos && (
                            <VideoList videos={videos} />
                        )}
                    </View>
                </ScrollView>
            )}
        </CustomGradient>
    );
}