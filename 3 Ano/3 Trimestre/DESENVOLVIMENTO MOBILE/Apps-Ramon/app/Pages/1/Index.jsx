import React, { useState } from 'react';
import { View, StyleSheet, Text, Image,  } from 'react-native';
import { Link } from 'expo-router';

const style = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },    
    
    nav: {
        width: '100%',
        height: '10%',
        backgroundColor: '#2C3E50',
        display: 'flex',
        position: 'static',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }, 
    
    box:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 20,
        flexDirection: 'row'
    },

    textoT: {
        color: 'white',
        cursor: 'pointer',
        fontSize: 30,
        fontWeight: 'bold',
    },

    box1:{
        backgroundColor: '#6699CC',
        padding: 10,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    texto: {
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 10

    },
    box2:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        margin: 20,
        gap: 20
    },
    img2: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    textoP: {
        color: 'Black',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'justify'
    },
});

export default SobreMim = () => {
    return (
        <View style={style.container}>


            <View style={style.nav}>
            <Text style={style.textoT}> Sobre Mim </Text>
            </View>

            <View style={style.box2}>

            <Image  style={style.img2}  source={require('../../../assets/images/asta.jpg')} />

            <Text style={style.textoP}>Oi, sou Nicolas, 18 anos, de Santa Catarina, o filho mais novo de três. Valorizo a educação dos meus pais e estou sempre buscando aprender mais. Sou focado e gosto de esportes, especialmente basquete, com o sonho de ser jogador profissional. Acredito que conhecemos as pessoas apenas pelo que elas mostram, e essa é a minha perspectiva. </Text>
            </View>

            <View style={style.box}>

            <Link 
            style={style.box1}
            href="../2/Index">
                <Text style={style.texto}> Veja Meus Filmes Favoritos </Text>
            </Link>

            <Link 
            style={style.box1}
            href="../3/Index">
                <Text style={style.texto}> Veja Os Jogos Que Mais Jogo </Text>
            </Link>



            </View>

        </View>
    )
}