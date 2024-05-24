import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// const [livros, setLivros] = useState([]); // Estado para armazenar os livros


// const adicionarLivro = async () => {
//   try {

//     const response = await axios.post('', {
//       nome: nomeLivro,
//       imagem: linkImagem,
//       status: selected,
//     });


//     // Limpa os campos do formulário
//     setNomeLivro('');
//     setLinkImagem('');
//     setSelection(0);

//     Alert.alert('Sucesso', 'Livro adicionado com sucesso!');
//   } catch (error) {
//     console.error(error);
//   }
// };



const CadastrarFilme = () => {
    const navigation = useNavigation();

  const [inputNomeFilme, setinputNomeFilme] = useState('');
  const [inputLinkImagemFilme, setinputLinkImagemFilme] = useState('');

  async function adicionarFilme() {
    try {

      const response = await axios.post('http://localhost:3333/filmes', {
        nome: inputNomeFilme,
        imagem: inputLinkImagemFilme,

      });
      navigation.goBack()


    } catch (error) {
      console.error(error);
    }

  }



  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Nome do Filme</Text>
          <TextInput
            style={styles.input}
            value={inputNomeFilme}
            onChangeText={setinputNomeFilme}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Link da Imagem</Text>
          <TextInput
            style={styles.input}
            value={inputLinkImagemFilme}
            onChangeText={setinputLinkImagemFilme}
          />

          
          <Button title="Adicionar Filme" onPress={adicionarFilme} />
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

export default CadastrarFilme;
