import { Text, TouchableOpacity, Image, Linking  } from "react-native";

import { styles } from "../../utils/styles";

export function VideoList({ videos }) {
    return (
        videos.map((video) => (
            <TouchableOpacity
                key={video.id.videoId}
                style={styles.videoContainer}
                onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${video.id.videoId}`)}
            >
                <Image
                source={{ uri: video.snippet.thumbnails.high.url }}
                style={styles.thumbnail}
                />
                <Text style={styles.videoTitle}>{video.snippet.title}</Text>
            </TouchableOpacity>
        ))
    );
}