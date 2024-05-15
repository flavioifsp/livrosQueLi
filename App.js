import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image, Text, StyleSheet } from 'react-native'; // Importe Text aqui
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lidos from './src/pages/Lidos';
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
        <View style={styles.userArea}>
            <Image
              source={{ uri: "http://lorempixel.com.br/500/400/?1" }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>Nome do Usuário</Text>
            <Icon name="settings" size={24} />
          </View>

     

          <Tab.Navigator
            tabBarPosition='top'
            screenOptions={{
              tabBarStyle: { height: 30 ,
              backgroundColor: '#FAEBD7'},
              tabBarShowLabel: false
            }}
          >
            <Tab.Screen 
              name="Lidos" 
              component={Lidos} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="book-check-outline" color={color} size={15} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Lendo" 
              component={EstouLendo} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="book-open-page-variant-outline" color={color} size={15} />
                ),
              }} 
            />
            <Tab.Screen 
              name="Desejo Ler" 
              component={QueroLer} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon name="heart-outline" color={color} size={15} />
                ),
              }} 
            />
          </Tab.Navigator>
        </SafeArea>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  userArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
  },
});

export default App;