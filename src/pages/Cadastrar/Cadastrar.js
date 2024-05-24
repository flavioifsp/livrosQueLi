import { useRoute,useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { CheckBox, View, TextInput, Button, Text, StyleSheet } from 'react-native';







const FormularioLivro = () => {
  const navigation = useNavigation();
  const dados = useRoute();

console.log(dados.params);



  const [selected, setSelection] = useState(0);
const [inputNomeLivro, setinputNomeLivro] = useState(
  dados.params?.item?.nome || ""
);
const [inputLinkImagem, setinputLinkImagem] = useState(
  dados.params?.item?.imagem || ""
);

  async function adicionarLivro() {
    try {

      const response = await axios.post('http://localhost:3333/livros', {
        nome: inputNomeLivro,
        imagem: inputLinkImagem,
        selecionado: selected,

      });

      navigation.goBack()

    } catch (error) {
      console.error(error);
    }

  }

  async function editarLivro() {
    try {
      const response = await axios.put(`http://localhost:3333/livros/${dados.params.item.id}`, {
        nome: inputNomeLivro,
        imagem: inputLinkImagem,
        selecionado: selected,
      });
  
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }
  
  async function excluirLivro() {
    try {
      const response = await axios.delete(`http://localhost:3333/livros/${dados.params.item.id}`, {
      });
  
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }





  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Nome do Livro</Text>
          <TextInput
            style={styles.input}
            value={inputNomeLivro}
            onChangeText={setinputNomeLivro}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Link da Imagem</Text>
          <TextInput
            style={styles.input}
            value={inputLinkImagem}
            onChangeText={setinputLinkImagem}
          />

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={selected === 0}
                onValueChange={() => setSelection(0)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>Estou Lendo</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={selected === 1}
                onValueChange={() => setSelection(1)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>Desejo Ler</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox
                value={selected === 2}
                onValueChange={() => setSelection(2)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>Amei</Text>
            </View>
          </View>
          <Button title="Adicionar Livro" onPress={adicionarLivro} />
          <Button title="Editar" color="black" onPress={editarLivro} />
          <Button title="Excluir" color="red" onPress={excluirLivro} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default FormularioLivro;
