import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useEffect, useState } from 'react';

// Utils
import { fetchVideos } from "../utils/fetchVideos";
import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";

// Api
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

export function AnxietyScreen() {

    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDateAnxiety');

            // If is a new day is a new fetch
            if (lastFetchedDate !== currentDate) {
                const anxietyVideos = await fetchVideos('ansiedade', 10);
                
                if(anxietyVideos) {
                    setVideos(anxietyVideos);

                    await AsyncStorage.setItem('lastVideosAnxiety', JSON.stringify(anxietyVideos));
                    await AsyncStorage.setItem('lastFetchedDateAnxiety', currentDate);
                    
                    setIsLoading(false);
                }
            } else {
                // Define a last res API
                const anxietyVideos = await AsyncStorage.getItem('lastVideosAnxiety');

                setVideos(JSON.parse(anxietyVideos));
                
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
                    <Icon style={styles.icon} name="leanpub" size={100} color={baseColor} />
                    <Text style={styles.title}>Aprenda sobre Ansiedade</Text>
                    <Text style={styles.description}>
                        Nesta seção você irá aprender o que de fato é a ansiedade, quais suas possíveis causas e também maneiras de alivia-la.
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