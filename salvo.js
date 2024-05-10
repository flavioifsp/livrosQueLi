import "react-native-gesture-handler";
import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Card from "./components/Card";

const products = [
  {
    photo: { uri: "https://picsum.photos/200" },
    nome: "Produto 1",
  },
  {
    photo: { uri: "https://picsum.photos/200" },
    nome: "Produto 2",
  },
  {
    photo: { uri: "https://picsum.photos/200" },
    nome: "Produto 3",
  },
  {
    photo: { uri: "https://picsum.photos/200" },
    nome: "Produto 4",
  },
];

const App = () => {
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

const styles = StyleSheet.create({
  list: {
    justifyContent: "center",
  },
});

export default App;
