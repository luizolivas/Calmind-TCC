import { Image, Dimensions } from "react-native";

const isTablet = Dimensions.get('window').width >= 600;

export function ImageExercise({ imageUrl }) {
    return (
        <Image source={imageUrl} style={{ width: isTablet ? 300 : 200, height: isTablet ? 300 : 200, alignSelf: 'center', borderRadius: 100, borderColor: 'black', borderWidth: 1 }} />
    )
}