import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

export function BackButton() {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.backContainer}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrow-left" size={40} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={styles.backButtonText}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    backContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      alignSelf: 'flex-start', 
      marginLeft: 0, 
    },
    backButtonText: {
        fontSize: 20,
        marginLeft: 10, 
    }
});
  