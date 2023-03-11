import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if (this.state.numero1 === '' || this.state.numero2 === ''){
      alert('Digite od dois numeros!')
      this.setState({resultado: ''})
      return;
    }
    resultado = this.state.numero1 * this.state.numero2
    this.setState({resultado: 'Resultado: '+ resultado});
  }


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        onChangeText={ (num) => this.setState({numero1: num})}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        onChangeText={ (num) => this.setState({numero2: num})}
      />

      <Button title="Entrar" onPress={this.calcular} />


      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    alignTop: 15
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 22,
    color: 'orange',
    margin: 15
  }
})


export default App;
