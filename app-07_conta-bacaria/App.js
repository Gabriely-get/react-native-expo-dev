import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, Switch } from 'react-native';
import Constants from 'expo-constants';
import Slider from '@react-native-community/slider';

import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      confirmado: '',
      limite: '',
      brasileiro: false,
      gen: '',
      genList: [
        {nome: 'masculino'},
        {nome: 'feminino'},
        {nome: 'outro'}
      ],
      escolaridade: '',
      escolaridadeList: [
        {nivel: 'Sem instrução'},
        {nivel: 'Ensino Funamental Incompleto'},
        {nivel: 'Ensino Funamental Completo'},
        {nivel: 'Ensino Médio Incompleto'},
        {nivel: 'Ensino Médio Completo'},
        {nivel: 'Ensino Superior Incompleto'},
        {nivel: 'Ensino Superior Completo'}
      ]
    };

    this.confirmar = this.confirmar.bind(this);
  }

  confirmar() {
    if (this.state.nome === '' ||
        this.state.gen === '' ||
        this.state.escolaridade === '' ||
        this.state.limite === '' ||
        this.state.brasileiro === ''
    ) {
      this.setState({ confirmado: false })
      alert("Todos os campos devem ser preenchidos");
      return;
    }

    this.setState({ confirmado: true })
    return;
  }

  render() {

    let genItem = this.state.genList.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    });

    let escolaridadeItem = this.state.escolaridadeList.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nivel} label={valor.nivel} />
    });

    let show = () => {
    if (this.state.confirmado == true) {
      return <View> 
              <Text> Nome: {this.state.nome} </Text>
              <Text> Idade: {this.state.idade} </Text>
              <Text> Gênero: {this.state.gen} </Text>
              <Text> Escolaridade: {this.state.escolaridade} </Text>
              <Text> Limite: {this.state.limite} </Text>
              <Text> Brasileiro: {this.state.brasileiro ? "Sim" : "Não"} </Text>
            </View>;
    }
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Abertura de Conta</Text>

        <View style={styles.view}>
          <Text style={styles.text}> Nome: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor='#D9CCC1'
            onChangeText={ (nome) => this.setState({nome: nome})}
          />
        </View>
        
        <View style={styles.view}>
          <Text style={styles.text}> Idade: </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            placeholderTextColor='#D9CCC1'
            keyboardType="numeric"
            onChangeText={ (idade) => this.setState({idade: idade})}
          />
        </View>
        
        <View style={styles.view}>
          <Text style={styles.text}> Gênero: </Text>
          <Picker style={styles.picker}
            selectedValue={this.state.gen}
            onValueChange={ (itemValue, itemIndex) => this.setState({gen: itemValue}) }
          >
            {genItem}
          </Picker>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}> Escolaridade: </Text>
          <Picker style={styles.picker}
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
          >
            {escolaridadeItem}
          </Picker>
        </View>

        <View style={styles.view}>  
          <Text style={styles.text}> Limite: </Text>
          <Slider style={{width: 300, margin: 5, borderWidth: 3}}
            minimumValue={0}
            maximumValue={1000}
            onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
            value={this.state.limite}
          />
          <Text style={{ alignSelf: 'center' }}> {this.state.limite} </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}> Brasileiro: {this.state.brasileiro ? "Sim" : "Não"}</Text>
          <Switch style={{marginLeft: 3}}
            value={this.state.brasileiro}
            onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch ? true : false })}
            thumbColor='red'
          />
        </View>

        
        <Pressable style={styles.botao} onPress={() => this.confirmar()}>
          <Text style={styles.textoBotao}>Confirmar</Text>
        </Pressable>

          { show() }
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 7,
    color: '#0E4F2F'
  },
  view: {
    height: 60
  },
  text: {
    alignSelf: 'start',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    height: '100%'
  },
  picker: {
    height: '100%',
    width: 255,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    borderColor: 'white'
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
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  input:{
    height: 30,
    width: '80%',
    marginBotton: 30,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 14,
    padding: 10,
    alignSelf: 'start',
    borderRadius: 4,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent'
  }
});

export default App;
