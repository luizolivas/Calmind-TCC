import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../utils/styles';

// Component
import { BackButton } from "../../components/BackButton/BackButton";

export function FourSevenEightScreen() {

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [circleColor, setCircleColor] = useState('lightblue'); 
    const [counterCicles, setCounterCicles] = useState(0);

    useEffect(() => {
        let interval;

        if (isStopwatchStart) {
            interval = setInterval(() => {
                setCurrentTime((prevTime) => prevTime + 1);
            }, 1000);
            if (currentTime === 5 && circleColor == 'lightblue') {
                setCurrentTime(1)
                setCircleColor('green');
                
            }
            else if( currentTime === 8 && circleColor == 'green'){
                setCurrentTime(1)
                setCircleColor('red');
            }
            else if( currentTime === 9 && circleColor == 'red'){
                setCurrentTime(0)
                setCounterCicles(counterCicles + 1)
                setCircleColor('lightblue');
            }
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isStopwatchStart, currentTime]);

    return (
        <View style={styles.container}>
            <BackButton />
            <Text style={styles.title}>Ciclos de respirações realizados: {counterCicles}</Text>
            <View style={[stylesFourSevenEight.circle, { backgroundColor: circleColor }]}>
                <Text style={stylesFourSevenEight.circleText}>{currentTime}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setIsStopwatchStart(!isStopwatchStart);
                    setCircleColor('lightblue');
                }}>
                <Text style={stylesFourSevenEight.buttonText}>
                    {!isStopwatchStart ? 'INICIAR' : 'PARAR'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setIsStopwatchStart(false);
                    setCurrentTime(0);
                }}>
                <Text style={stylesFourSevenEight.buttonText}>REINICIAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const stylesFourSevenEight = StyleSheet.create({
    secondsText: {
        fontSize: 40,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        marginTop: 10,
    },
    circleText: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});