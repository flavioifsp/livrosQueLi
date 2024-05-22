import axios from 'axios';
import React, { useState } from 'react';
import { CheckBox, View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';


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



const FormularioLivro = () => {
  const paia = usePa,,

  const [selected, setSelection] = useState(0);
  const [inputNomeLivro, setinputNomeLivro] = useState('');
  const [inputLinkImagem, setinputLinkImagem] = useState('');

  async function adicionarLivro() {
    try {

      const response = await axios.post('http://localhost:3333/livros', {
        nome: inputNomeLivro,
        imagem: inputLinkImagem,
        selecionado: selected,

      });
      console.log(response.data);


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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={selected === 0}
                onValueChange={() => setSelection(0)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>Estou Lendo</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={selected === 1}
                onValueChange={() => setSelection(1)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>Desejo Ler</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                value={selected === 2}
                onValueChange={() => setSelection(2)}
                style={styles.checkbox}
              />
              <Text style={{ marginLeft: 5 }}>
                Amei
              </Text>
            </View>
          </View>
          <Button title="Adicionar Livro" onPress={adicionarLivro} />
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
