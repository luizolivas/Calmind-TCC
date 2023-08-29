import { Text, StyleSheet, View, BackHandler } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../../utils/styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../components/Button/Button';

export function FourSevenEightScreen() {

    const navigation = useNavigation();

    // Estados do componente
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [circleColor, setCircleColor] = useState('lightblue');
    const [counterCicles, setCounterCicles] = useState(0);
    const [sound, setSound] = useState(null);
    const [countdown, setCountdown] = useState(3);
    const [isSoundPlaying, setIsSoundPlaying] = useState(false); // Estado para rastrear se o som está tocando
    const [instruction, setInstruction] = useState('Inspire: Respire pelo nariz por 4 segundos.')

    const route = useRoute();
    const { isSoundOn } = route.params;

    // Função para tocar o som
    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../../../assets/audios/SoundHz.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsSoundPlaying(true); // Definindo o estado como true quando o som começa a tocar
    }

    // Função para parar o som
    async function stopSound() {
        if (sound) {
            console.log('Stopping Sound');
            await sound.stopAsync();
            setIsSoundPlaying(false); // Definindo o estado como false quando o som é parado
        }
    }

    // Efeito que controla a reprodução do som com base nas mudanças de estados
    useEffect(() => {
        if (isSoundOn && isStopwatchStart && !isSoundPlaying) {
            playSound(); // Toca o som se o som estiver ligado, o cronômetro estiver ativo e o som não estiver tocando
        } else if (!isSoundOn || !isStopwatchStart) {
            stopSound(); // Para o som se o som estiver desligado ou o cronômetro não estiver ativo
        }
    }, [isSoundOn, isStopwatchStart, isSoundPlaying]);

    // Efeito para lidar com o botão de voltar e parar o som ao sair do componente
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            stopSound(); // Para o som
            navigation.goBack(); // Navega de volta
            return true;
        });

        return () => {
            backHandler.remove(); // Remove o listener quando o componente é desmontado
        };
    }, [navigation]);

    // Efeito que controla o cronômetro
    useEffect(() => {
        let interval;

        if (isStopwatchStart) {
            interval = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
            if (currentTime === 5 && circleColor == 'lightblue') {
                setCurrentTime(1)
                setInstruction('Prenda: Segure a respiração por 7 segundos.')
                setCircleColor('green');
            }
            else if (currentTime === 8 && circleColor == 'green') {
                setCurrentTime(1)
                setInstruction('Expire: Solte o ar pela boca por 8 segundos.')
                setCircleColor('red');
            }
            else if (currentTime === 9 && circleColor == 'red') {
                setCurrentTime(0)
                setCounterCicles(counterCicles + 1)
                setInstruction('Inspire: Respire pelo nariz por 4 segundos.')
                setCircleColor('lightblue');
            }
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isStopwatchStart, currentTime]);

    // Efeito para controlar a contagem regressiva
    useEffect(() => {

        if (!isStopwatchStart && countdown > 0) {
            const timeout = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        } else if (!isStopwatchStart && countdown === 0) {
            setIsStopwatchStart(true);
        }

    }, [isStopwatchStart, countdown]);

    const goBack = () => {
        stopSound(); // Pare o som
        navigation.goBack(); // Volte para a tela anterior
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}></View>
            {/* Renderiza a contagem regressiva ou o número de ciclos */}
            {countdown > 0 ? (
                <Text style={styles.title}>Começando em: {countdown}</Text>
            ) : (
                <Text style={styles.title}>
                    Ciclos respiratórios realizados: {counterCicles}
                </Text>
            )}
            {/* Renderiza o círculo colorido */}
            <View style={[stylesFourSevenEight.circle, { backgroundColor: circleColor }]}>
                <Text style={stylesFourSevenEight.circleText}>{currentTime}</Text>
            </View>

            {/* Renderiza a contagem regressiva ou o número de ciclos */}
            {countdown > 0 ? (
                <Text></Text>
            ) : (
                <Text style={styles.description}>{instruction}</Text>
            )}
            <View style={styles.instructionsContainer}>
                <Button text="Encerrar" onPress={goBack} style={stylesFourSevenEight.button} />
            </View>

            <View style={{ flex: 1 }}></View>
        </View>
    );
}

const stylesFourSevenEight = StyleSheet.create({
    secondsText: {
        fontSize: 40,
        marginBottom: 20,
    },
    circleText: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        width: 150,
        height: 60,
        marginTop: 50
    },
    instructionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
});
