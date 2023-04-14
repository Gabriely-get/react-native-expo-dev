import { Text, View, Image, TextInput, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
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