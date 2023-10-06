import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

const isTablet = Dimensions.get('window').width >= 600;

export function BackButton() {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.backContainer}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="arrow-left" size={ isTablet ? 45 : 35 } color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={styles.backButtonText}>
                <Text style={styles.backButtonText}>Voltar</Text>
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
        fontSize: isTablet ? 25 : 16,
        fontFamily: 'Roboto_500Medium',
        marginLeft: 10
    }
});
  