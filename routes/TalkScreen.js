import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions , ScrollView } from "react-native";
import React, { useEffect, useState } from 'react';
import { styles } from "../utils/styles";
import { baseColor } from "../utils/baseColor";
import CustomGradient from "../utils/CustomGradient";
import * as Location from 'expo-location';

// Icons in https://fontawesome.com/v4/icons/
import Icon from "react-native-vector-icons/FontAwesome";

// Component
import { BackButton } from "../components/BackButton/BackButton";

const isTablet = Dimensions.get('window').width >= 600;

export function TalkScreen() {

    const openChat = () => {
        Linking.openURL('https://www.cvv.org.br/chat/');
    };

    const openCall = () => {
        const phoneNumber = '188'; 
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const openMaps = () => {
        const url = `https://www.google.com/maps/search/UBS+ou+CAPS`;
        Linking.openURL(url);
    };

    return (
        <CustomGradient>
            <BackButton />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Icon style={styles.icon} name="heart" size={ isTablet ? 120 : 100 } color={baseColor} />
            <Text style={styles.title}>Apoio</Text>
            <Text style={stylesTalk.topic}>SUPORTE ONLINE - CVV</Text>
            <Text style={stylesTalk.descriptionSuport}>
                Saiba que você não está passando por isso sozinho! O CVV - Centro de Valorização da Vida, um espaço seguro e confidencial, está pronto para ouvir você com empatia e carinho.
            </Text>
            <View style={stylesTalk.buttonContainer}>
                <TouchableOpacity onPress={openChat} style={stylesTalk.button}>
                    <Icon name="comments-o" size={ isTablet ? 110 : 90 } color={"#4CAF50"} />
                    <Text style={styles.description}>Chat Online</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openCall} style={stylesTalk.button}>
                    <Icon name="phone-square" size={ isTablet ? 110 : 90} color={"#4CAF50"} />
                    <Text style={styles.description}>Ligue</Text> 
                </TouchableOpacity>
            </View>
            <Text>{"\n"}</Text>

            <Text style={stylesTalk.topic}>SUPORTE PRESENCIAL - UBS/CAPS</Text>
            <Text style={stylesTalk.descriptionSuport}>
                Saiba que o apoio está ao seu alcance em sua cidade. Descubra os serviços oferecidos pelas Unidades Básicas de Saúde (UBS) e pelos Centros de Atenção Psicossocial (CAPS). Esses espaços físicos possibilitam suporte ou podem encaminhá-lo para ajuda profissional especializada.</Text>
            <View style={stylesTalk.buttonContainer}>
                <TouchableOpacity onPress={openMaps} style={stylesTalk.button}>
                    <Icon name="map-marker" size={ isTablet ? 110 : 90 } color={"#4CAF50"} />
                    <Text style={styles.description}>Locais</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}></View>
            </ScrollView>           
        </CustomGradient>
    );
}

const stylesTalk = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'center'
    },
    topic: {
        width: isTablet ? 380 : 280,
        fontSize: isTablet ? 24 : 18,
        fontWeight: 'bold', 
        backgroundColor: '#13388E',
        color: 'white', 
        padding: 8, 
        textAlign: 'center',
        borderTopLeftRadius: 20
    },
    descriptionSuport: {
        textAlign: 'justify',
        fontFamily: 'Roboto_400Regular',
        fontSize: isTablet ? 22 : 18,
        marginTop: 10,
        marginBottom: 20
    },
});
