import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EstouAssistindo from './EstouAssitindo';

const Tab = createMaterialTopTabNavigator();

export default function Filmes() {
    const navigation = useNavigation();
    const [data, setData] = useState([]); // State to store the data from the database

    // Fetch data from the API
    useEffect(() => {
        fetch('http://localhost:3333/filmes')
            .then(response => response.json())
            .then(fetchedData => setData(fetchedData))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <View style={styles.userArea}>
                <Button title="Livros" onPress={() => navigation.navigate('Home')} color="brown"></Button>
                <Text style={styles.userName}>FILMES</Text>
                <Button title="Adicionar Filme" onPress={() => navigation.navigate('cadastrarFilme')} color="#3CB371"></Button>
            </View>

            <View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()} 
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text>{item.nome}</Text> 
                        </View>
                    )}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    userArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    userName: {
        flex: 1,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        elevation: 3,
        marginHorizontal: 4,
        marginVertical: 6,
        padding: 10,
    },
});