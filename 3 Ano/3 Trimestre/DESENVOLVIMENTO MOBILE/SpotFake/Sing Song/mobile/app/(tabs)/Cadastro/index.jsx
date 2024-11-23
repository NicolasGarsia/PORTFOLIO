import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    const [name, setName] = useState("");
    const [bday, setBday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        if (!name || !bday || !email || !password) {
            return alert('Todos os campos devem ser preenchidos');
        }

        const formData = {name: name, bday: bday, email: email, password: password};

        try {
            const res = fetch("http://localhost:8000/registro", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            switch (response.status) {
              case 201:
                alert("Usuário criado");
                break;
              case 406:
                alert("Preencha todos os campos");
                break;
              case 418:
                alert("Email já cadastrado");
                break;
              default:
                alert("Erro ao se conectar com servidor");
                break;
            }
          } catch (error) {}
    }

    return (
        <SafeAreaView style={styles.containerup}>
            <View style={styles.headerup}>
            <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/007/058/885/non_2x/modern-fire-flame-music-notes-for-hot-song-logo-design-vector.jpg'}} style={styles.imageup} />
                <Text style={styles.headerTextup}>Sing Song</Text>
                <Text style={styles.subHeaderTextup}>Larga de ser burro e cadastre-se logo!</Text>
            </View>

            <View style={styles.formup}>
                <TextInput
                    style={styles.inputup}
                    placeholder="Name"
                    placeholderTextColor="#fff"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="E-mail"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="dd/mm/aaaa"
                    placeholderTextColor="#fff"
                    value={bday}
                    onChangeText={(text) => setBday(text)}
                />
                <TextInput
                    style={styles.inputup}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Link href="/">
                    <TouchableOpacity style={styles.buttonup} onPress={handleRegister}>
                        <Text style={styles.buttonTextup}>Cadastre-se</Text>
                    </TouchableOpacity>
                </Link>
            </View>
                <View style={styles.signupContainerup}>
                    <Text style={styles.signupTextup}>Tu ja tem conta?</Text>
                    <Link href="/">
                        <Text style={styles.signupLinkup}>Entre</Text>
                    </Link>
                </View>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerup: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    headerup: {
        alignItems: 'center',
        marginBottom: 40,
    },
    headerTextup: {
        marginTop: -50,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF1493',
    },
    subHeaderTextup: {
        fontSize: 16,
        color: '#FF4500',
        marginTop: 10,
        marginBottom:30
    },
    formup: {
        marginTop: -40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 400,
    },
    inputup: {
        width: '90%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: 'grey',
        color: '#FF4500',
    },
    buttonup: {
        backgroundColor: '#a80453',
        height: 40,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonTextup: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupContainerup: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupTextup: {
        marginBottom: 70,
        fontSize: 16,
        color: '#FF4500',
        marginRight: 5,
    },
    signupLinkup: {
        color: '#a80000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: -40
    },
    imageup: {
        marginBottom: 50,
        width: 150,
        height: 150
    }
});
