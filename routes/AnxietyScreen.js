import { View, Text  } from "react-native";
import { useEffect, useState } from 'react';

// Utils
import { fetchVideos } from "../utils/fetchVideos";
import { styles } from "../utils/styles";

// Api
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";
import { VideoList } from "../components/VideoList/VideoList";

export function AnxietyScreen() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDateAnxiety');

            // If is a new day is a new fetch
            if (lastFetchedDate !== currentDate) {
                const anxietyVideos = await fetchVideos('ansiedade');
                
                if(anxietyVideos) {
                    setVideos(anxietyVideos);

                    await AsyncStorage.setItem('lastVideosAnxiety', JSON.stringify(anxietyVideos));
                    await AsyncStorage.setItem('lastFetchedDateAnxiety', currentDate);
                }
            } else {
                // Define a last res API
                const anxietyVideos = await AsyncStorage.getItem('lastVideosAnxiety');

                setVideos(JSON.parse(anxietyVideos));
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
                <Text style={{flex: 1, marginTop: 50}}>Carregando vídeos...</Text>
            )}
        </View>
    );
}