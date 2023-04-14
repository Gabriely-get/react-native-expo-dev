import React, { useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App(){
  const [preco_alcool, setPrecoAlcool] = useState('')
  const [preco_gasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const divisao = () => {
    if (!preco_alcool.trim() && !preco_gasolina.trim()){
      alert('Digite os dois preços!');
      setResultado((''));
      return;
    }

    if (preco_alcool == 0 || preco_gasolina == 0){
      alert('Digite preços válidos!');
      setResultado((''));
      return;
    }
    resultado_conta = preco_alcool / preco_gasolina;

    if (resultado_conta < 0.7) {
      setResultado(("É mais vantajoso abastecer com Álcool."));
      return;
    } else {
      setResultado(("É mais vantajoso abastecer com Gasolina."));
      return;
    }

  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Álcool ou Gasolina</Text>

        <Image
          source={require('./assets/combustivel.jpg')}
          style={styles.imageAlign}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o preço do alcool"
          placeholderTextColor='#D9CCC1'
          keyboardType="numeric"
          onChangeText={ (preco) => setPrecoAlcool((preco))}
        />

        <TextInput 
          mode="flat"
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          placeholderTextColor='#D9CCC1'
          keyboardType="numeric"
          onChangeText={ (preco) => setPrecoGasolina((preco))}
        />

        <Button style={styles.calcular_button} title="Calcular" onPress={divisao} />
        <Text style={styles.resultado}>{resultado}</Text>
        
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 5,
  },
  imageAlign: {
    alignSelf: 'center',
    height: 220,
    width: 220,
    margin: 5,
    borderRadius: 7
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#E8B223'
  },
  input:{
    height: 45,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    fontSize: 20,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 4,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  resultado: {
    alignSelf: 'center',
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold'
  }
});
