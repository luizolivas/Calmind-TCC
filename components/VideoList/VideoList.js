import { Text, TouchableOpacity, FlatList, Image, Linking  } from "react-native";

import { styles } from "../../utils/styles";

export function VideoList({ videos }) {
    return (
        <FlatList
            data={videos}
            nestedScrollEnabled // ScrollView
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
        />
    );
}