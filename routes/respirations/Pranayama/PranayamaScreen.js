import { Text, StyleSheet, View, BackHandler, Animated, Easing, Platform, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks';

import { styles } from '../../../utils/styles';
import CustomGradient from "../../../utils/CustomGradient";

import { useNavigation } from '@react-navigation/native';

import stepOne from "../../../assets/stepOne.jpg"
import stepTwo from "../../../assets/stepTwo.jpg"
import hand from "../../../assets/hand.jpg"

// Components
import { Button } from '../../../components/Button/Button';

function PranayamaScreen() {

    const navigation = useNavigation();

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Inicialize com a primeira imagem
    const images = [stepOne,stepTwo]; 

    // Estados do componente
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [circleColor, setCircleColor] = useState('lightblue');
    const [counterCicles, setCounterCicles] = useState(0);
    const [countdown, setCountdown] = useState(3);
    const [instruction, setInstruction] = useState('Inspire pela narina direita e bloqueie a narina esquerda')
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
            if (currentTime === 4 && circleColor == 'lightblue') {
                setCurrentImageIndex(0);
                setCurrentTime(1);
                setInstruction('Expire pela narina direita com a narina esquerda bloqueada');
                setCircleColor('green');
                animateCircleScale(0.8,6000); 
                // Iniciar animação para aumentar o tamanho
            }
            else if (currentTime === 7 && circleColor == 'green') {
                setCurrentImageIndex(1);
                setCurrentTime(1);
                setInstruction('Inspire pela narina esquerda e bloqueie a narina direita');
                setCircleColor('red');
                animateCircleScale(1.2, 3000); // Iniciar animação para diminuir o tamanho
            }
            if (currentTime === 4 && circleColor == 'red') {
                setCurrentImageIndex(1);
                setCurrentTime(1);
                setInstruction('Expire pela esquerda direita com a narina esquerda bloqueada');
                setCircleColor('blue');
                animateCircleScale(0.8,6000); // Iniciar animação para aumentar o tamanho
            }
            else if (currentTime === 7 && circleColor == 'blue') {
                setCurrentImageIndex(0);
                setCurrentTime(0);
                setCounterCicles(counterCicles + 1);
                setInstruction('Inspire pela narina direita e bloqueie a narina esquerda');
                setCircleColor('lightblue');
                animateCircleScale(1.2,3000); // Iniciar animação para retornar ao tamanho original
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
            setCurrentImageIndex(0);
            setIsStopwatchStart(true);
            animateCircleScale(1.2,3000)
        }

    }, [isStopwatchStart, countdown]);

    const goBack = () => {
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                {/* Renderiza a contagem regressiva ou o número de ciclos */}
                {countdown > 0 ? (
                    <Text style={styles.title}> Expire todo o ar dos seus pulmões.{'\n'}Começando em: {countdown} </Text>
                ) : (
                    <Text style={styles.title}>
                        Ciclos respiratórios realizados: {counterCicles}
                    </Text>
                )}
                {/* Renderiza o círculo colorido */}
                <Animated.View
                    style={[
                        stylesPranayama.circle,
                        { backgroundColor: circleColor, transform: [{ scale: circleScaleAnimated }] },
                    ]}>
                    <Text style={stylesPranayama.circleText}>{currentTime}</Text>
                </Animated.View>
                <View style={stylesPranayama.instructionsContainer}>
                    {/* Renderiza a contagem regressiva ou o número de ciclos */}
                    {countdown > 0 ? (
                        <Text></Text>
                    ) : (
                        <Text style={styles.description}>{instruction}</Text>
                    )}
                        <View style={stylesPranayama.container}>
                            <Image source={images[currentImageIndex]} style={{ width: 250, height: 150 }} />
                            <Image source={hand} style={{ width: 200, height: 200 }} />
                        </View>
                    <View >
                        <Button text="Encerrar" onPress={goBack} style={stylesPranayama.button} />
                    </View>
                </View>
                </View>
            </ScrollView>
        </CustomGradient>
    );
}

export default PranayamaScreen

const stylesPranayama = StyleSheet.create({
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    container: {
        flex: 1,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
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
});
