import { View, Text, StyleSheet, TouchableOpacity, Image, Linking  } from "react-native";
import { useNavigation } from "@react-navigation/native";


// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";


export function TalkScreen() {
    const navigation = useNavigation();

    const openChat = () => {
        Linking.openURL('https://www.cvv.org.br/chat/'); 
    };

    const openCall = () => {
        const phoneNumber = '188'; 
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const goBack = () => {
        navigation.goBack()
    };


    return (
        
        <View style={styles.container}>
            <View style={styles.backContainer}>
                
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-left" size={60} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack} style={styles.backButtonText}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
            </View>
            <Icon name="comments" size={100} color={"black"} />
            <Text style={styles.title}>Conversar</Text>

            <Text style={styles.description}>
                Saiba que você não está passando por isso sozinho! O CVV – Centro de Valorização da Vida, um espaço seguro e confidencial, está pronto para ouvir você com empatia e carinho.
            </Text>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={openChat} style={styles.button}>
                    <Icon name="comments-o" size={90} color={"black"} />
                    <Text style={styles.description}>Chat online </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openCall} style={styles.button}>
                    <Icon name="phone-square" size={90} color={"black"} />
                    <Text style={styles.description}>  Ligue </Text> 
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    backContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        alignSelf: 'flex-start', 
        marginLeft: 0, 
    },
    backButtonText: {
        fontSize: 18,
        marginLeft: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 110,
        
    },
    button: {
        marginRight: 40,
        marginLeft: 40, 
      },

});