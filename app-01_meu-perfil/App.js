import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
      <Image
          source={require('./assets/me.jpg')}
          style={styles.imageAlign}
        />

      <View style={styles.dados}>
        <Text style={styles.title}>
          Dados Pessoais:
        </Text>

        <Text style={styles.text}>
          Gabriely Willian Cristovão dos Santos {'\n'}
          gabrielysantos.informatica@gmail.com 
        </Text>

        <Text style={styles.title}>
          Formação:
        </Text>

        <Text style={styles.text}>
          ETEC de Praia Grande - Informática para Internet {'\n'}
          ETEC de Praia Grande - Desenvolvimento de Sistemas {'\n'}
          FATEC de Praia Grande - Análise e Desenvolvimento de Sistemas 
        </Text>

        <Text style={styles.title}>
          Experiência:
        </Text>

        <Text style={styles.text}>
          Estgiária Back End at Ilegra
        </Text>

        <Text style={styles.title}>
          Projetos:
        </Text>

        <Text style={styles.text}>
          Biblioteca  {'\n'}
          Consuming API CEP, Twitter & Github  {'\n'}
          AWS Certified Cloud Practitioner
        </Text>

      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 13,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#031348'
  },
  text: {
    marginLeft: 15,
    fontSize: 12,
    textAlign: 'left'
  },
  dados: {
    justifyContent: 'center',
    alignItems: 'left'
  },
  imageAlign: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    margin: 5
  },
});
