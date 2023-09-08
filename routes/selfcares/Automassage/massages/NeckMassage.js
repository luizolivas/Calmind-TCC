import { Text, View, ScrollView, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from '../../../../utils/styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../../components/Button/Button';
import { StepByStep } from '../../../../components/StepByStep/StepByStep';

export function NeckMassage() {

    const navigation = useNavigation();
    const route = useRoute();
    const { isSoundOn } = route.params;

    const listOfSteps = [
        'Sente-se confortavelmente em uma cadeira ou poltrona.',
        'Use a mão direita para massagear o ombro esquerdo.',
        'Use movimentos circulares suaves e aplique uma pressão moderada.',
        'Repita do lado oposto.',
        'Em seguida, use as mãos para massagear a parte de trás do pescoço, aplicando pressão moderada.',
        'Continue por alguns minutos, respirando profundamente enquanto massageia.'
    ]

    const [sound, setSound] = useState(null);

    // Função para tocar o som
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../../../assets/audios/NeckMassage.mp3'));
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

    // Efeitos para lidar com o botão e interação de voltar e parar o som ao sair do componente
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            goBack()
            return true;
        });

        return () => {
            backHandler.remove();
        };
    }, [navigation]);

    useBackHandler(() => {
        goBack()
    })

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Massagem nos Ombros e Pescoço</Text>
                <StepByStep list={listOfSteps} />
                <View style={{alignItems: 'center'}}>
                    <Button text="Encerrar" onPress={goBack} style={styles.buttonGoBack} />
                </View>
            </ScrollView>
        </View>
    );
}