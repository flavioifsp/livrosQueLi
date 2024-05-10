import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";
import Perfil from "./src/pages/Perfil";
import EstouLendo from "./src/pages/EstouLendo";
import QueroLer from "./src/pages/QueroLer";

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Perfil" component={Perfil} />
          <Tab.Screen name="Lendo" component={EstouLendo} />
          <Tab.Screen name="Desejo Ler" component={QueroLer} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
