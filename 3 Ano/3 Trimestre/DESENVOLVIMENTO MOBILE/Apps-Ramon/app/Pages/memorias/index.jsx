import { SafeAreaView, StyleSheet, View, Pressable, Text, Image, ScrollView } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "expo-router";
import { useEffect, useState } from "react";

const MemoriesScreen = () => {
    const [memories, setMemories] = useState([]);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Memories');
            const storedMemories = jsonValue != null ? JSON.parse(jsonValue) : [];
            setMemories(storedMemories);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Bar
                Titulo={'Memories'}
                href={'/'}
                icon={<Entypo name="home" size={24} color="white" />}
                cor={'#4682B4'}
            />
            <SafeAreaView style={styles.container}>
                <Pressable style={styles.addButton}>
                    <Link href={'/Memories/addMemories'}>
                        <View style={styles.center}>
                            <Entypo name="plus" size={34} color="white" />
                        </View>
                    </Link>
                </Pressable>
                {memories.length > 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                        {memories.map((memory, index) => (
                            <View style={styles.card} key={index}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: memory.Img }}
                                />
                                <Text style={styles.title}>{memory.Titulo}</Text>
                                <Text style={styles.description}>{memory.Descricao}</Text>
                                <View>
                                    <View style={styles.extraBox}>
                                        <FontAwesome name="map-marker" size={14} color='#4682B4' />
                                        <Text style={styles.extra}>{memory.Localizacao}</Text>
                                    </View>
                                    <View style={styles.extraBox}>
                                        <Entypo name="calendar" size={12} color='#4682B4' />
                                        <Text style={styles.extra}>{memory.Ano}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                ) : (
                    <View>
                        <Text>No memories found.</Text>
                    </View>
                )}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    list: {
        padding: 10,
        minHeight: '20vh',
        maxHeight: '100vh',
        marginVertical: 14
    },
    addButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4345B4',
        borderRadius: 50,
        marginVertical: 10,
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1
    },
    center: {
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        position: 'relative',
        borderRadius: 8,
        resizeMode: 'contain'
    },
    card: {
        backgroundColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        borderRadius: 6,
        gap: 6,
        marginBottom: 10,
        shadowOpacity: 0.3,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 2,
        }
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 300
    },
    description: {
        fontSize: 13,
        width: 300
    },
    extra: {
        fontSize: 12,
        color: '#4682B4',
        width: 300,
    },
    extraBox: {
        flexDirection: 'row',
        gap: 8
    }
});

export default MemoriesScreen;
