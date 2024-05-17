import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/native-stack';
import { View, Image, Text, StyleSheet, Button } from 'react-native'; // Importe Text aqui
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lidos from './src/pages/Lidos';
import EstouLendo from './src/pages/EstouLendo';
import QueroLer from './src/pages/QueroLer';
import Cadastrar from './src/pages/Cadastrar/Cadastrar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();



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

function Home({navigation}) {
  return (
    <>


      <View style={styles.userArea}>
        <Image
          source={{ uri: "http://lorempixel.com.br/500/400/?1" }}
          style={styles.userImage}
        />
        <Text style={styles.userName}>Nome do Usuário</Text>
        <Button title="Adiconar Livro" onPress={() => navigation.navigate('cadastrar')} color="#3CB371"  ></Button>
      </View>

      <Tab.Navigator
        tabBarPosition='top'
        screenOptions={{
          tabBarStyle: {
            height: 30,
            backgroundColor: '#FAEBD7'
          },
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
    </>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeArea>


          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
            <Stack.Screen name="cadastrar" component={Cadastrar} />

          </Stack.Navigator>



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