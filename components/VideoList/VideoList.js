import { Text, StyleSheet, TouchableOpacity, FlatList, Image, Linking  } from "react-native";

export function VideoList({ videos }) {
    return (
        <FlatList
            data={videos}
            nestedScrollEnabled // ScrollView
            keyExtractor={(item) => item.id.videoId}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={stylesVideo.videoContainer}
                    onPress={() => Linking.openURL(`https://www.youtube.com/watch?v=${item.id.videoId}`)}
                >
                    <Image
                        source={{ uri: item.snippet.thumbnails.high.url }}
                        style={stylesVideo.thumbnail}
                    />
                    <Text style={stylesVideo.videoTitle}>{item.snippet.title}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const stylesVideo = StyleSheet.create({
    videoPlayer: {
        alignSelf: 'center'
    },
    videoContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    videoTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    thumbnail: {
        width: 240,
        height: 160,
    }
});