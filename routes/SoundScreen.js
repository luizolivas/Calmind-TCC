import { View, Text, StyleSheet  } from "react-native";
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


export function SoundScreen() {

    const [lofiVideos, setlofiVideos] = useState([]);
    const [meditationVideos, setmeditationVideos] = useState([]);
    const [specialVideos, setspecialVideos] = useState([]);

    useEffect(() => {

        const checkAndFetchVideo = async () => {

            const currentDate = new Date().toLocaleDateString();
            const lastFetchedDate = await AsyncStorage.getItem('lastFetchedDateSound');

            // If is a new day is a new fetch
            if(lastFetchedDate !== currentDate) {
                const lofiVideosData = await fetchVideos('lofi');
                const meditationVideosData = await fetchVideos('meditação');
                const specialVideosData = await fetchVideos('432hz');
                
                if(lofiVideosData) {
                    setlofiVideos(lofiVideosData);
                    setmeditationVideos(meditationVideosData);
                    setspecialVideos(specialVideosData);

                    await AsyncStorage.setItem('lastVideosLofi', lofiVideosData);
                    await AsyncStorage.setItem('lastVideosMeditation', meditationVideosData);
                    await AsyncStorage.setItem('lastVideosSpecial', specialVideosData);
                    await AsyncStorage.setItem('lastFetchedDateSound', currentDate);
                }
            } else {
                // Define a last res API
                const lofiVideosData = await AsyncStorage.setItem('lastVideosLofi');
                const meditationVideosData = await AsyncStorage.setItem('lastVideosMeditation');
                const specialVideosData = await AsyncStorage.setItem('lastVideosSpecial');

                setlofiVideos(lofiVideosData);
                setmeditationVideos(meditationVideosData);
                setspecialVideos(specialVideosData);
            }

        }

        checkAndFetchVideo();

    }, []);

    return (
        <View style={styles.container}>
            <BackButton />
            <Icon name="music" size={100} color={"black"} />
            <Text style={styles.title}>Relaxamento Sonoro</Text>
            <Text style={styles.description}>
                Aproveite essa seção com músicas para acalmar, relexar e distrair a mente.
            </Text>
            <View style={stylesSound.videosContainer}>
                <Text style={stylesSound.titleSection}>Lo-fi</Text>
                {lofiVideos ? (
                    <VideoList videos={lofiVideos} />
                )
                : (
                    <Text style={{flex: 1, marginTop: 50}}>Carregando vídeos...</Text>
                )}
            </View>
            <View style={stylesSound.videosContainer}>
                <Text style={stylesSound.titleSection}>Meditação</Text>
                {meditationVideos ? (
                    <VideoList videos={meditationVideos} />
                )
                : (
                    <Text style={{flex: 1, marginTop: 50}}>Carregando vídeos...</Text>
                )}
            </View>
            <View style={stylesSound.videosContainer}>
                <Text style={stylesSound.titleSection}>432hz</Text>
                {specialVideos ? (
                    <VideoList videos={specialVideos} />
                )
                : (
                    <Text style={{flex: 1, marginTop: 50}}>Carregando vídeos...</Text>
                )}
            </View>
        </View>
    );
}

const stylesSound = StyleSheet.create({
    videosContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSection: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})