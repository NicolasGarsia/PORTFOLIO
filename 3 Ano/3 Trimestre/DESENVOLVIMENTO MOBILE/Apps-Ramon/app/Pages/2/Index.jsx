import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    nav: {
        width: '100%',
        height: 60,
        backgroundColor: '#2C3E50',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    img: {
        width: 30,
        height: 30,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    box: {
        flex: 1,
        padding: 20,
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    box3: {
        marginBottom: 20,
    },
    img2: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    boxT: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 1, // Adicionado para permitir que a caixa de texto encolha
    },
    textoP: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        flexShrink: 1, // Adicionado para permitir que o texto encolha
        maxWidth: '70%', // Limita a largura do texto
    },
    textoP2: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
        flexShrink: 1, // Adicionado para permitir que o texto encolha
    },
});

const Filmes = () => {
    return (
        <View style={style.container}>
            <View style={style.nav}>
                <Link href="../1/Index">
                    <Image style={style.img} source={require('../../../assets/images/voltar.png')} />
                </Link>
                <Text style={style.textoT}>Filmes</Text>
            </View>

            <ScrollView contentContainerStyle={style.box}>
                <View style={style.box3}>
                    {[
                        { title: "Como Treinar o Seu Dragão", img: require('../../../assets/images/cmtd.png') },
                        { title: "Como Treinar o Seu Dragão 2", img: require('../../../assets/images/cmtd1.png') },
                        { title: "Como Treinar o Seu Dragão 3", img: require('../../../assets/images/cmtd3.png') },
                        { title: "Ben 10 - A Corrida Contra o Tempo", img: require('../../../assets/images/ben10.png') },
                        { title: "It - A Coisa", img: require('../../../assets/images/it.png') },
                        { title: "Halloween Kills", img: require('../../../assets/images/hallowen.png') },
                    ].map((filme, index) => (
                        <View style={style.box2} key={index}>
                            <Image style={style.img2} source={filme.img} />
                            <View style={style.boxT}>
                                <Text style={style.textoP} numberOfLines={1} ellipsizeMode="tail">{filme.title}</Text>
                                <Text style={style.textoP2}>Sobre o Filme</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Filmes;
