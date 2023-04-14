import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random_number: ''
    };

    this.random = this.random.bind(this);
  }

  random() {
    random = Math.floor(Math.random() * 10);
    this.setState({random_number: random});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>

        <Image
          source={require('./assets/charada.jpg')}
          style={styles.imageAlign}
        />

        <Text style={styles.text}> Pense em um nº de 0 a 10 </Text>

        <Text style={styles.random_number}> {this.state.random_number} </Text>

        <Pressable style={styles.botao} onPress={() => this.random()}>
          <Text style={styles.textoBotao}>DESCOBRIR</Text>
        </Pressable>

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
    height: 200,
    width: 200,
    margin: 5,
    borderRadius: 4
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: '#0E4F2F'
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#A62B1F'
  },
  botao:{
    alignSelf: 'center',
    width: 200,
    height: 40,
    margin: 20,
    backgroundColor: '#2E5910'
  },
  textoBotao:{
    margin: '5%',
    alignSelf: 'center',
    height: 45,
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold'
  },
  resultado: {
    alignSelf: 'center',
    fontSize: 15,
    margin: 10,
    fontWeight: 'bold'
  },
  random_number: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;