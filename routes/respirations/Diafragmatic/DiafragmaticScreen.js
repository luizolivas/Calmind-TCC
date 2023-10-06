import { Text, StyleSheet, View, BackHandler, Animated, Easing, Platform, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from '../../../utils/styles';
import CustomGradient from "../../../utils/CustomGradient";

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../components/Button/Button';

const isTablet = Dimensions.get('window').width >= 600;

export function DiafragmaticScreen() {

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
    const [circleScaleAnimated] = useState(new Animated.Value(1.0));

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

    const animateCircleScale = (toValue, time) => {
        Animated.timing(circleScaleAnimated, {
            toValue: toValue,
            duration: time, // Duração da animação em milissegundos
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };

    // Efeito que controla o cronômetro
    useEffect(() => {
        let interval;

        if (isStopwatchStart) {
            interval = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
            if (currentTime === 5 && circleColor == 'lightblue') {
                setCurrentTime(1);
                setInstruction('Prenda: Segure a respiração 2 segundos.');
                setCircleColor('red');
                animateCircleScale(1.2); // Iniciar animação para aumentar o tamanho
            }
            else if (currentTime === 3 && circleColor == 'red') {
                setCurrentTime(1);
                setInstruction('Expire: Solte o ar por 6 segundos.');
                setCircleColor('green');
                animateCircleScale(0.8, 6000); // Iniciar animação para diminuir o tamanho
            }
            else if (currentTime === 7 && circleColor == 'green') {
                setCurrentTime(0);
                setCounterCicles(counterCicles + 1);
                setInstruction('Inspire: Respire pelo nariz por 4 segundos.');
                setCircleColor('lightblue');
                animateCircleScale(1.2,4000); // Iniciar animação para retornar ao tamanho original
            }
            
        } else {
            clearInterval(interval);
        }
    
        return () => {
            clearInterval(interval);
        };
    }, [isStopwatchStart, currentTime ]);

    // Efeito para controlar a contagem regressiva
    useEffect(() => {

        if (!isStopwatchStart && countdown > 0) {
            const timeout = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        } else if (!isStopwatchStart && countdown === 0) {
            setIsStopwatchStart(true);
            animateCircleScale(1.2,4000)
        }

    }, [isStopwatchStart, countdown]);

    const goBack = () => {
        stopSound(); // Pare o som
        navigation.goBack(); // Volte para a tela anterior
    }

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
            <Animated.View
                style={[
                    stylesDiafragmatic.circle,
                    { backgroundColor: circleColor, transform: [{ scale: circleScaleAnimated }] },
                ]}>
                <Text style={stylesDiafragmatic.circleText}>{currentTime}</Text>
            </Animated.View>
            <View style={stylesDiafragmatic.instructionsContainer}>
                {/* Renderiza a contagem regressiva ou o número de ciclos */}
                {countdown > 0 ? (
                    <Text></Text>
                ) : (
                    <Text style={styles.description}>{instruction}</Text>
                )}
                <Text style={stylesDiafragmatic.instructionRespiration}>
                    Mantenha a mão sobre o abdômen.
                </Text>
                <View >
                    <Button text="Encerrar" onPress={goBack} style={styles.buttonGoBack} />
                </View>
            </View>
            <View style={{ flex: 1 }}></View>
        </CustomGradient>
    );
}

const stylesDiafragmatic = StyleSheet.create({
    secondsText: {
        fontSize: isTablet ? 80 : 40,
        marginBottom: 20,
    },
    circleText: {
        fontSize: isTablet ? 200 : 100,
        fontWeight: 'bold',
        color: 'white',
    },
    circle: {
        width: isTablet ? 300 : 150,
        height: isTablet ? 300 : 150,
        borderRadius: isTablet ? 200 : 100,
        marginTop: isTablet ? 20 : 10,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            android: {
                elevation: 5
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            }
        })
    },
    instructionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    instructionRespiration: {
        textAlign: 'center',
        fontSize: isTablet ? 20 : 17,
        marginTop: 10,
        marginBottom: 20
    }
});
