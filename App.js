import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from './src/pages/Perfil';
import EstouLendo from './src/pages/EstouLendo';
import QueroLer from './src/pages/QueroLer';

const Tab = createMaterialTopTabNavigator();

const SafeArea = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeArea>
        
        <Image
            source={{ uri: "http://lorempixel.com.br/500/400/?1" }} // Substitua pelo URL da sua imagem
            style={{ width: '100%', height: 55 }} // Ajuste o tamanho conforme necessário
          />
        
        
          <Tab.Navigator
            tabBarPosition='top'
            screenOptions={{
              labelStyle: { fontSize: 1 },
              tabBarStyle: { height: 50 }, // Ajuste a altura conforme necessário // Diminui o tamanho da fonte
            }}
          >
            <Tab.Screen 
              name="Perfil" 
              component={Perfil} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="account-outline" color={color} size={15} /> // Aumenta o tamanho do ícone
                ),
              }} 
            />
            <Tab.Screen 
              name="Lendo" 
              component={EstouLendo} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="book-outline" color={color} size={25} /> // Aumenta o tamanho do ícone
                ),
              }} 
            />
            <Tab.Screen 
              name="Desejo Ler" 
              component={QueroLer} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="heart-outline" color={color} size={25} /> // Aumenta o tamanho do ícone
                ),
              }} 
            />
          </Tab.Navigator>
        </SafeArea>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;