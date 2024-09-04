import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Image, Modal } from 'react-native';

const style = StyleSheet.create({
    estiloLogo: {
        marginTop: 25,
        height: 200,
        width: 300,
        borderRadius: 25,
        marginBottom: 25
    },
    container: {
        alignItems: 'center',
        height: '100%'
    },
    botoes: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 40
    },
    botao: {
        backgroundColor: '#ff6d00',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: 120,
        margin: 10
    },
    txt: {
        fontWeight: 'bold',
        color: 'white'
    },
    inputBox: {
        backgroundColor: '#AFCBDF',
        width: 320,
        marginTop: 50,
        marginBottom: 50,
        padding: 10,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C3E50',
        opacity: 0.98,
        borderRadius: 20,
        marginTop: 180,
        marginRight: 40,
        marginLeft: 40,
        padding: 20,
        flexDirection: 'column'
    },
    txtmodal2: {
        color: 'white',
        marginBottom: 20
    },
    botoesmodal: {
        flexDirection: 'row'
    },
    botaomodal: {
        backgroundColor: '#ff6d00',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: 120,
        margin: 10
    }
});

export default function BackScreen() {
    const [saldo, setSaldo] = useState(7320.92);
    const [valor, setValor] = useState('');
    const Logoist = 'https://www.pensarcursos.com.br/blog/wp-content/uploads/2024/03/itau.jpg';

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [actionType, setActionType] = useState('');

    const openConfirmationModal = (type) => {
        setActionType(type);
        if (type === 'depositar') {
            setModalMessage('Você está prestes a depositar. A taxa é de 1%. Continuar?');
        } else if (type === 'sacar') {
            setModalMessage('Você está prestes a sacar. A taxa é de 0.5%. Continuar?');
        }
        setShowModal(true);
    };

    const handleConfirm = () => {
        if (actionType === 'depositar') {
            depositar();
        } else if (actionType === 'sacar') {
            sacar();
        }
        setShowModal(false);
    };

    const depositar = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            const novoSaldo = saldo + valorNumerico + valorNumerico * 0.02;
            setSaldo(novoSaldo);
            setValor('');
        }
    };

    const sacar = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico) && valorNumerico > 0) {
            const taxa = valorNumerico * 0.005;
            const novoSaldo = saldo - valorNumerico - taxa;
            if (novoSaldo >= 0) {
                setSaldo(novoSaldo);
                setValor('');
            } else {
                alert('Saldo insuficiente.');
            }
        }
    };

    return (
        <View style={style.container}>
            <View>
                <Image
                    style={style.estiloLogo}
                    source={{ uri: Logoist }}
                />
            </View>
            <View>
                <Text style={style.txtsaldo2}>Seu saldo:</Text>
                <Text style={style.txtsaldo3}>{saldo.toFixed(2)}</Text>
            </View>
            <View>
                <TextInput
                    onChangeText={setValor}
                    value={valor}
                    placeholder='Insira o valor desejado!'
                    keyboardType='numeric'
                    style={style.inputBox}
                />
            </View>
            <View style={style.botoes}>
                <Pressable style={style.botao} onPress={() => openConfirmationModal('depositar')}>
                    <Text style={style.txt}>Deposite</Text>
                </Pressable>
                <Pressable style={style.botao} onPress={() => openConfirmationModal('sacar')}>
                    <Text style={style.txt}>Saque</Text>
                </Pressable>
            </View>
            <Modal
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={style.modalContainer}>
                    <Text style={style.txtmodal2}>{modalMessage}</Text>
                    <View style={style.botoesmodal}>
                        <Pressable style={style.botaomodal} onPress={handleConfirm}>
                            <Text style={style.txt}>Confirmar</Text>
                        </Pressable>
                        <Pressable style={style.botaomodal} onPress={() => setShowModal(false)}>
                            <Text style={style.txt}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
