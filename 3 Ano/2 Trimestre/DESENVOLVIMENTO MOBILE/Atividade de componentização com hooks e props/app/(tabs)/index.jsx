import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, Modal } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        top: 0,
        width: '100%',
        height: '100%'
    },
    container1: {
        marginBottom: 40
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold'
    },


    txt: {
        fontSize: 17,
    },
    inputT: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 330,
        padding: 8,
        margin: 5,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15
    },

    container2: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    botao: {
        backgroundColor: '#AFCBDF',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        width: 150,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'center'
    },
    txt1: {
        fontSize: 15
    }


});

export default function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
    });

    const [showSenha, setShowSenha] = useState(false);
    const [mensagem, setMensagem] = useState(null);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
          alert("Todos os campos devem ser preenchidos");
        }
        try {
          const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
          });
        } catch (error) {
          console.error(error);
        }
      };

    return (

        <>
            <View style={style.container}>


                <View style={style.container1}>
                    <Text style={style.titulo}> Cadastre-se </Text>
                </View>

                <View>
                    <Text style={style.txt}> Nome </Text>
                    <TextInput style={style.inputT} value={formData.name} onChangeText={(text) => setFormData({ ...formData, name: text })} />
                </View>
                <View>
                    <Text style={style.txt}> Email </Text>
                    <TextInput style={style.inputT} value={formData.email} onChangeText={(text) => setFormData({ ...formData, email: text })} />
                </View>
                <View>
                    <Text style={style.txt}> Senha </Text>
                    <TextInput style={style.inputT} value={formData.password} onChangeText={(text) => setFormData({ ...formData, password: text })} />
                </View>


                <View style={style.container2}>
                    <Pressable style={style.botao} onPress={() => handleSubmit()}>
                        <Text style={style.txt1}>Cadastre-se</Text>
                    </Pressable>
                    <Pressable style={style.botao} onPress={() => handleSubmit()}>
                        <Text style={style.txt1}>Google</Text>
                    </Pressable>
                </View>


            </View>
        </>

    );
}
