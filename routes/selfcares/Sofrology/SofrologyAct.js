import { Text, StyleSheet, View, ScrollView, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../../utils/styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../components/Button/Button';

export function SofrologyAct() {

    const navigation = useNavigation();
    const route = useRoute();
    const { isSoundOn } = route.params;

    const [sound, setSound] = useState(null);

    // Função para tocar o som
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../../assets/audios/SofrologyAudio.mp3'));
        setSound(sound);
        await sound.playAsync();
    }

    // Função para parar o som
    async function stopSound() {
        if (sound) {
            await sound.stopAsync();
        }
    }

    const goBack = () => {
        stopSound();
        navigation.goBack();
    }

    useEffect(() => {
        if (isSoundOn) {
            setTimeout(() => {
                playSound()
            }, 3000)
        }
    }, [])

    // Efeito para lidar com o botão de voltar e parar o som ao sair do componente
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            stopSound();
            navigation.goBack();
            return true;
        });

        return () => {
            backHandler.remove();
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Relaxamento Progressivo</Text>
            <View style={sylesSofrologyAct.exerciseContainer}>
                <Text style={sylesSofrologyAct.exerciseText}>1. Encontre um local tranquilo e confortável para se sentar ou deitar.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>2. Feche os olhos e comece a focar na sua respiração, fazendo algumas respirações profundas.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>3. Comece pelo grupo muscular dos pés: contraia os músculos dos dedos dos pés e dos pés, segurando a tensão por alguns segundos.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>4. Em seguida, relaxe completamente os músculos dos pés, sentindo a sensação de alívio.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>5. Continue esse padrão, movendo-se gradualmente pelo corpo: pernas, abdômen, peito, costas, braços, mãos, pescoço e rosto.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>6. Contraia cada grupo muscular por alguns segundos e depois solte completamente, focando na sensação de relaxamento.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>7. Lembre-se de respirar profundamente durante todo o exercício, mantendo uma respiração tranquila e regular.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>8. Após ter percorrido todos os grupos musculares, reserve alguns momentos para sentir a sensação geral de relaxamento em todo o corpo.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>9. Permaneça nesse estado de relaxamento por alguns minutos, apreciando a tranquilidade que você criou.</Text>
                <Text style={sylesSofrologyAct.exerciseText}>10. Quando estiver pronto, abra os olhos e retome suas atividades, mantendo essa sensação de relaxamento.</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Button text="Encerrar" onPress={goBack} style={styles.buttonGoBack} />
            </View>
            </ScrollView>
        </View>
    );
}

const sylesSofrologyAct = StyleSheet.create({
    exerciseContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    exerciseText: {
        fontSize: 18,
        flex: 1,
        marginVertical: 10
    }
})