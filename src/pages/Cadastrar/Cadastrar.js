import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';

const FormularioLivro = () => {
  const [nomeLivro, setNomeLivro] = useState('');
  const [linkImagem, setLinkImagem] = useState('');

  const handleAdicionarLivro = () => {
    if (nomeLivro === '' || linkImagem === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    // Aqui você pode adicionar a lógica para salvar o livro em algum lugar
    // Por exemplo, enviar os dados para um servidor ou armazená-los localmente

    // Após adicionar o livro, limpar os campos do formulário
 

    // Adicione qualquer outra ação que você deseja realizar após adicionar o livro
    Alert.alert('Sucesso', 'Livro adicionado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Nome do Livro</Text>
        <TextInput
          style={styles.input}
          value={nomeLivro}
          onChangeText={setNomeLivro}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Link da Imagem</Text>
        <TextInput
          style={styles.input}
          value={linkImagem}
          onChangeText={setLinkImagem}
        />
      </View>
      <Button title="Adicionar Livro" onPress={handleAdicionarLivro} />
    </View>
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
