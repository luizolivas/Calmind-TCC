import { Text, View, ScrollView, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from '../../../../utils/styles';
import CustomGradient from "../../../../utils/CustomGradient";

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../../components/Button/Button';
import { StepByStep } from '../../../../components/StepByStep/StepByStep';
import { ImageExercise } from '../../../../components/ImageExercise/ImageExercise';

import handMassage from '../../../../assets/handMassage.jpg';

export function HandMassage() {

    const navigation = useNavigation();
    const route = useRoute();
    const { isSoundOn } = route.params;

    const listOfSteps = [
        'Sente-se com as mãos apoiadas na mesa ou suas pernas.',
        'Use o polegar de uma mão para massagear a palma da outra mão, em movimentos circulares.',
        'Em seguida, massageie cada dedo, começando pelas pontas e indo até a base.',
        'Repita do outro lado.',
        'Termine apertando suavemente a mão em um punho e soltando.'
    ]

    const [sound, setSound] = useState(null);

    // Função para tocar o som
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../../../../assets/audios/HandMassage.mp3'));
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
        <CustomGradient>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Massagem nas Mãos</Text>
                <ImageExercise imageUrl={handMassage} />
                <StepByStep list={listOfSteps} />
                <View style={{alignItems: 'center'}}>
                    <Button text="Encerrar" onPress={goBack} style={styles.buttonGoBack} />
                </View>
            </ScrollView>
        </CustomGradient>
    );
}
