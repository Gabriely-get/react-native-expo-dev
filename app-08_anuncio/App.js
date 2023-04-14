import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      confirmado: false,
      anuncio: [
        {uri: require('./assets/sakura.jpeg'), text: 'Vende-se Kit: Báculo do Selo & Báculo da Estrela - Sakura Card Captors', preco: 100.00},
        {uri: require('./assets/colecao_talismas.jpg'), text: 'Vende-se talismãs - Jackie Chan', preco: 80.00},
        {uri: require('./assets/kit_ninja.jpg'), text: 'Vende-se Kit Ninja - Naruto', preco: 60.00},
        {uri: require('./assets/sunny_go.jpg'), text: 'Vende-se miniatura Thousand Sunny Go - One Piece', preco: 80.00}
      ]
    };

    this.confirmar = this.confirmar.bind(this);
  }

  confirmar() {
    this.setState({ confirmado: true })
  }

  render(){
    let anunciosItem = this.state.anuncio.map( (valor, chave) => {
      return <View style={styles.anuncio_container}>
              <Image source={valor.uri} style={styles.image} /> 
              <Text style={styles.text}> {valor.text}</Text>
              <Text style={styles.text}> R$ {valor.preco} </Text>
             </View>
    });

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>

        <View>
           <ScrollView horizontal={true} >
            {anunciosItem}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text:{
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    width: 150,
    color: '#08403E'
  },
  image:{
    height: 310,
    width: 260,
    margin: 7,
    borderColor: 'white',
    borderWidth: 5,
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 33,
    fontWeight: 'bold',
    margin: 10,
    color: '#0E4F2F'
  }
});
