import { Text, StyleSheet, View, BackHandler, Animated, Easing, Platform } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../../utils/styles';

import { useRoute, useNavigation } from '@react-navigation/native';

import { Audio } from 'expo-av';

// Components
import { Button } from '../../../components/Button/Button';

export function PranayamaScreen() {

    const navigation = useNavigation();

    // Estados do componente
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [circleColor, setCircleColor] = useState('lightblue');
    const [counterCicles, setCounterCicles] = useState(0);
    const [countdown, setCountdown] = useState(3);
    const [instruction, setInstruction] = useState('Inspire pela narina esquerda')
    const [circleScaleAnimated] = useState(new Animated.Value(1.0));

    

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
                setInstruction('Expira pela narina direita');
                setCircleColor('green');
                animateCircleScale(0.8,8000); // Iniciar animação para aumentar o tamanho
            }
            else if (currentTime === 9 && circleColor == 'green') {
                setCurrentTime(1);
                setInstruction('Inspire pela narina direita');
                setCircleColor('red');
                animateCircleScale(1.2, 4000); // Iniciar animação para diminuir o tamanho
            }
            if (currentTime === 5 && circleColor == 'red') {
                setCurrentTime(1);
                setInstruction('Expira pela narina esquerda');
                setCircleColor('blue');
                animateCircleScale(0.8,8000); // Iniciar animação para aumentar o tamanho
            }
            else if (currentTime === 9 && circleColor == 'blue') {
                setCurrentTime(0);
                setCounterCicles(counterCicles + 1);
                setInstruction('Inspire pela narina esquerda');
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
            <Animated.View
                style={[
                    stylesFourSevenEight.circle,
                    { backgroundColor: circleColor, transform: [{ scale: circleScaleAnimated }] },
                ]}>
                <Text style={stylesFourSevenEight.circleText}>{currentTime}</Text>
            </Animated.View>

            <View style={stylesFourSevenEight.instructionsContainer}>
                {/* Renderiza a contagem regressiva ou o número de ciclos */}
                {countdown > 0 ? (
                    <Text></Text>
                ) : (
                    <Text style={styles.description}>{instruction}</Text>
                )}
                <View >
                    <Button text="Encerrar" onPress={goBack} style={stylesFourSevenEight.button} />
                </View>
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
        width: 150,
        height: 150,
        borderRadius: 100,
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
