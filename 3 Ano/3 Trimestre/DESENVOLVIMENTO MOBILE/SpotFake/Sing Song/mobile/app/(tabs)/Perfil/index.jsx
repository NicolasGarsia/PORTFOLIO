import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8000/get.users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setName(userData.name);
        setEmail(userData.email);
        setBio(userData.bio);
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao conectar ao servidor.');
    }
  };

  const handleSendImage = async () =>{
    try{
      const data ={
        "file":image,
        "uploud_preset":'ml_default'
      }
      const res = await fetch('/*api*/',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringfy(data)
      });
      const result = await res.json();
      setImage(result.url)
      setUserInfo({ ...userinfo, profile_image:result.url })
      await saveNewImageURLonBackend(result)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);


  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permissão necessária", "Permita o acesso à galeria para selecionar uma imagem.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); 
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert('Perfil atualizado', 'Suas alterações foram salvas.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.margem}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        {isEditing ? (
          <TextInput
            style={styles.nameInput}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        ) : (
          <Text style={styles.name}>{name}</Text>
        )}
        <Text style={styles.email}>{email}</Text>
      </View>

      <View style={styles.profileBody}>
        <Text style={styles.bioTitle}>Uma breve descrição sobre você!</Text>
        {isEditing ? (
          <TextInput
            style={styles.bioInput}
            value={bio}
            onChangeText={(text) => setBio(text)}
            multiline
          />
        ) : (
          <Text style={styles.bio}>{bio}</Text>
        )}
      </View>

      {isEditing ? (
        <Button title="Salvar" onPress={handleSave} color="#a80453" />
      ) : (
        <Button title="Editar Perfil" onPress={() => setIsEditing(true)} color="#a80453" />
      )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'White',
    padding: 20,
    justifyContent: 'center',
  },
  margem:{
    margin:20
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  nameInput: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4500',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  profileBody: {
    marginVertical: 10,
  },
  bioTitle: {
    fontSize: 20,
    color: '#FF1493',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#FF4500',
    lineHeight: 22,
  },
  bioInput: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'gray',
    textAlignVertical: 'top',
  },
});
