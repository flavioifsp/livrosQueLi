import React, { useState, useEffect } from "react";
import axios from 'axios';
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

function Card({ item, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('cadastrar', { item } ) } >
            <View style={{ borderWidth: 1, borderColor: '#000', margin: 10, padding: 10 }}>
                <Text>{item.nome}</Text>
                <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100 }} />
            </View>
        </TouchableOpacity>
    );
}

export default function EstouLendo({ navigation }) {


    const [liste, setListe] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/livros')
            .then(response => {
                setListe(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <FlatList
            data={liste}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                item.selecionado === 0 ? <Card item={item} navigation={navigation} /> : null
            )}
        />
    );
}