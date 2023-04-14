import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcularImc = () => {
    if (peso === '' || altura === ''){
      alert('Preencha ambos os campos!')
      setImc((''))
      return;
    }

    if (peso < 1 || altura < 1){
      alert('Preencha os campos com valores válido!')
      setImc((''))
      return;
    }

    quadrado = altura*altura;
    resultado = peso / quadrado;

    if (resultado < 18.5) {
      setImc(("Abaixo do peso"));
      return;
    } 
    if(resultado < 25) {
      setImc(("Peso normal"));
      return;
    }
    if(resultado < 30) {
      setImc(("Sobrepeso"));
      return;
    }
    if(resultado < 35) {
      setImc(("Obesidade Grau I"));
      return;
    }
    if(resultado < 40) {
      setImc(("Obesidade Grau II"));
      return;
    } 
    if (resultado >= 40) {
      setImc(("Obesidade Grau III ou Mórbida"));
      return;
    }
  }

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
        onChangeText={ (peso) => setPeso((peso))}
      />

      <TextInput 
        mode="flat"
        style={styles.input}
        placeholder="Digite a altura"
        placeholderTextColor='#D9CCC1'
        keyboardType="numeric"
        onChangeText={ (altura) => setAltura((altura))}
      />
      <Button style={styles.calcular_button} title="Calcular" onPress={calcularImc} />
      <Text style={styles.resultado}>{imc}</Text>
      
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
