import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
    },
    textoT: {
        color: 'white',
        cursor: 'pointer',
        fontSize: 30
    },
    texto: {
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: 20,
        textDecorationLine: 'underline',
    },
});

export default Home = () => {
    return (
        <View style={style.container}>

            <View style={style.box}>
                <Text style={style.textoT}> Selecione Seu Destino : </Text>

                <Link href="./Pages/1/Index">
                    <Text style={style.texto}> SOBRE MIM </Text>
                </Link>

                <Link href="./Pages/Gradiente">
                    <Text style={style.texto}> Gradiente </Text>
                </Link>

                <Link href="./Pages/Cadastro">
                    <Text style={style.texto}> Cadastro </Text>
                </Link>

                <Link href="./Pages/Pokemon">
                    <Text style={style.texto}> Pokemon </Text>
                </Link>

                <Link href="./Pages/Banco">
                    <Text style={style.texto}> Banco </Text>
                </Link>

                <Link href="./Pages/iFome/home">
                    <Text style={style.texto}> iFome </Text>
                </Link>

                <Link href="./Pages/camera">
                    <Text style={style.texto}> Camera </Text>
                </Link>

            </View>

        </View>
    )
}
