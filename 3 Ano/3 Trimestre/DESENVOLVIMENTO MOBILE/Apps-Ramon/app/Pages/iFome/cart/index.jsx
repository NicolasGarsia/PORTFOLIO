import React, { useContext } from 'react';
import { View, Text, Image, FlatList, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { AppContext } from '../../../../scripts/appContext';



export default function Cart() {
    const { cart, setCart } = useContext(AppContext)

    const calcularTotal = () => {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            let preco = cart[i].preco
            total += preco
        }
        return total
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <Text style={styles.itemEstabelecimento}>{item.estabelecimento}</Text>
                <Text style={styles.itemPreco}>R${item.preco.toLocaleString('pt-BR',  {style: 'decimal', minimumIntegerDigits: 1})}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Link href={'../home'} >
                    <Text style={styles.voltarTexto}>{'< Voltar'}</Text>
                </Link>
                <Text style={styles.headerTexto}>Carrinho</Text>
            </View>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalTexto}>Total: R$ {calcularTotal()}</Text>
                <Pressable style={styles.comprarButton}>
                    <Text style={styles.comprarButtonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#2C3E50',
    },
    voltarTexto: {
        color: '#fff',
        fontSize: 18,
    },
    headerTexto: {
        fontSize: 20,
        color: '#fff',
    },
    flatList: {
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    itemImagem: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
    },
    itemNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemEstabelecimento: {
        fontSize: 14,
        color: '#666',
    },
    itemPreco: {
        fontSize: 16,
        color: '#000',
    },
    totalContainer: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    totalTexto: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    comprarButton: {
        backgroundColor: '#6699CC',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    comprarButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});
