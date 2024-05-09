import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, View, StyleSheet, Text } from 'react-native';import Card from './components/Card'; 

const HomeScreen = () => {
  const products = [
    {
      photo: { uri: 'https://picsum.photos/200' },
      nome: 'Produto 1',
    },
    {
      photo: { uri: 'https://picsum.photos/200' },
      nome: 'Produto 2',
    },
    {
      photo: { uri: 'https://picsum.photos/200' },
      nome: 'Produto 3',
    },
    {
      photo: { uri: 'https://picsum.photos/200' },
      nome: 'Produto 4',
    },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <Card product={item} />}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.list}
    />
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
  },
});

export default App;