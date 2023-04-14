import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: ''
    };

    this.calcularImc = this.calcularImc.bind(this);
  }

  calcularImc() {
    if (this.state.peso === '' || this.state.altura === ''){
      alert('Preencha ambos os campos!')
      this.setState({imc: ''})
      return;
    }

    quadrado = this.state.altura*this.state.altura;
    resultado = this.state.peso / quadrado;

    if (resultado < 18.5) {
      this.setState({imc: "Abaixo do peso"});
      return;
    } 
    if(resultado < 25) {
      this.setState({imc: "Peso normal"});
      return;
    }
    if(resultado < 30) {
      this.setState({imc: "Sobrepeso"});
      return;
    }
    if(resultado < 35) {
      this.setState({imc: "Obesidade Grau I"});
      return;
    }
    if(resultado < 40) {
      this.setState({imc: "Obesidade Grau II"});
      return;
    } 
    if (resultado >= 40) {
      this.setState({imc: "Obesidade Grau III ou Mórbida"});
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>IMC</Text>

        <Image
          source={require('./assets/imc.jpg')}
          style={styles.imageAlign}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o peso"
          placeholderTextColor='#D9CCC1'
          keyboardType="numeric"
          onChangeText={ (peso) => this.setState({peso: peso})}
        />

        <TextInput 
          mode="flat"
          style={styles.input}
          placeholder="Digite a altura"
          placeholderTextColor='#D9CCC1'
          keyboardType="numeric"
          onChangeText={ (altura) => this.setState({altura: altura})}
        />
        <Button style={styles.calcular_button} title="Calcular" onPress={this.calcularImc} />
        <Text style={styles.resultado}>{this.state.imc}</Text>
        
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
    height: 150,
    width: 200,
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