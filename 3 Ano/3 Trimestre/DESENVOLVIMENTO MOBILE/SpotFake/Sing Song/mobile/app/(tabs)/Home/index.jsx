import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos!');
    } else {
      Alert.alert('Sucesso', `Bem-vindo, ${email}!`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> HOME HOME HOME HOME HOME HOME HOME </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.signupContainer}>
        <Link href="/Perfil" >
        <Button title="Entrar" onPress={handleLogin} color="#a80453" />
        </Link>
        </View>
        <View style={styles.signupContainer}>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF1493',
  },
  subHeaderText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  form: {
    paddingHorizontal: 20,
  },

  
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
 
  image: {
    marginTop: -100,
    marginBottom: 50,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
