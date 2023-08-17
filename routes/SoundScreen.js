import { View, Text, StyleSheet, SectionList, TouchableOpacity, Image  } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "../utils/styles";

// Api
import { fetchVideos } from "../utils/fetchVideos";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Components
import { BackButton } from "../components/BackButton/BackButton";


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

                    await AsyncStorage.setItem('lastVideosLofi', JSON.stringify(lofiVideosData));
                    await AsyncStorage.setItem('lastVideosMeditation', JSON.stringify(meditationVideosData));
                    await AsyncStorage.setItem('lastVideosSpecial', JSON.stringify(specialVideosData));
                    await AsyncStorage.setItem('lastFetchedDateSound', currentDate);
                }
            } else {
                // Define a last res API
                const lofiVideosData = await AsyncStorage.getItem('lastVideosLofi');
                const meditationVideosData = await AsyncStorage.getItem('lastVideosMeditation');
                const specialVideosData = await AsyncStorage.getItem('lastVideosSpecial');

                setlofiVideos(JSON.parse(lofiVideosData));
                setmeditationVideos(JSON.parse(meditationVideosData));
                setspecialVideos(JSON.parse(specialVideosData));
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
            <SectionList
                sections={[
                {
                    title: "Lo-fi",
                    data: lofiVideos,
                },
                {
                    title: "Meditação",
                    data: meditationVideos,
                },
                {
                    title: "432hz",
                    data: specialVideos,
                },
                ]}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.id.videoId}
                    style={styles.videoContainer}
                    onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${item.id.videoId}`)}
                >
                    <Image
                        source={{ uri: item.snippet.thumbnails.high.url }}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.videoTitle}>{item.snippet.title}</Text>
                </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>{section.title}</Text>
                )}
                ListHeaderComponent={null}
            />
        </View>
    );
}