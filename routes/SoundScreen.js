import { View, Text, ScrollView, ActivityIndicator, Dimensions } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Api
import { fetchVideos } from "../utils/fetchVideos";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

const isTablet = Dimensions.get('window').width >= 600;

export function SoundScreen() {

    const [isLoading, setIsLoading] = useState(true);

    const [lofiVideos, setlofiVideos] = useState([]);
    const [meditationVideos, setmeditationVideos] = useState([]);
    const [specialVideos, setspecialVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDateSound');

            // If is a new day is a new fetch
            if(lastFetchedDate !== currentDate) {
                const lofiVideosData = await fetchVideos('lofi', 5);
                const meditationVideosData = await fetchVideos('meditação', 5);
                const specialVideosData = await fetchVideos('432hz', 5);
                
                if(lofiVideosData) {
                    setlofiVideos(lofiVideosData);
                    setmeditationVideos(meditationVideosData);
                    setspecialVideos(specialVideosData);

                    await AsyncStorage.setItem('lastVideosLofi', JSON.stringify(lofiVideosData));
                    await AsyncStorage.setItem('lastVideosMeditation', JSON.stringify(meditationVideosData));
                    await AsyncStorage.setItem('lastVideosSpecial', JSON.stringify(specialVideosData));
                    await AsyncStorage.setItem('lastFetchedDateSound', currentDate);

                    setIsLoading(false);
                }
            } else {
                // Define a last res API
                const lofiVideosData = await AsyncStorage.getItem('lastVideosLofi');
                const meditationVideosData = await AsyncStorage.getItem('lastVideosMeditation');
                const specialVideosData = await AsyncStorage.getItem('lastVideosSpecial');

                setlofiVideos(JSON.parse(lofiVideosData));
                setmeditationVideos(JSON.parse(meditationVideosData));
                setspecialVideos(JSON.parse(specialVideosData));

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
                    <Icon style={styles.icon} name="music" size={ isTablet ? 120 : 100 } color={baseColor} />
                    <Text style={styles.title}>Relaxamento Sonoro</Text>
                    <Text style={styles.description}>
                        Aproveite essa seção com músicas para acalmar, relaxar e distrair a mente.
                    </Text>
                    <View>
                        <Text style={[styles.videoTitle, { fontSize: isTablet ? 30 : 22, color: baseColor }]}>Lo-fi</Text>
                        {lofiVideos && (
                            <VideoList videos={lofiVideos} />
                        )}
                        <Text style={[styles.videoTitle, { fontSize: isTablet ? 30 : 22, color: baseColor }]}>Meditação</Text>
                        {meditationVideos && (
                            <VideoList videos={meditationVideos} />
                        )}
                        <Text style={[styles.videoTitle, { fontSize: isTablet ? 30 : 22, color: baseColor }]}>432hz</Text>
                        {specialVideos && (
                            <VideoList videos={specialVideos} />
                        )}
                    </View>
                </ScrollView>
            )}
        </CustomGradient>
    );
}