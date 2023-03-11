import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preco_alcool: '',
      preco_gasolina: '',
      resultado: ''
    };

    this.divisao = this.divisao.bind(this);
  }

  divisao() {
    if (this.state.preco_alcool === '' || this.state.preco_gasolina === ''){
      alert('Digite os dois preços!')
      this.setState({resultado: ''})
      return;
    }
    resultado = this.state.preco_alcool / this.state.preco_gasolina;
    if (resultado < 0.7) {
      this.setState({resultado: "É mais vantajoso abastecer com Álcool."});
      return;
    } else {
      this.setState({resultado: "É mais vantajoso abastecer com Gasolina."});
    }
  }

  render() {
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
          onChangeText={ (preco) => this.setState({preco_alcool: preco})}
        />

        <TextInput 
          mode="flat"
          style={styles.input}
          placeholder="Digite o preço da gasolina"
          placeholderTextColor='#D9CCC1'
          keyboardType="numeric"
          onChangeText={ (preco) => this.setState({preco_gasolina: preco})}
        />

        <Button style={styles.calcular_button} title="Calcular" onPress={this.divisao} />
        <Text style={styles.resultado}>{this.state.resultado}</Text>
        
      </View>
    );
  }
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

export default App;