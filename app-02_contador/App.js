import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };


    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }
  
  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementar(){
    if (this.state.contador > 0) {
      this.setState({
      contador: this.state.contador - 1
    });
    }
  }


  render(){
    return(
      <View style={{ marginTop: 20, padding: 10 }}>

        <Text style={{fontSize: 200, color: 'red', textAlign: 'center'}}>
          {this.state.contador}
        </Text>

        
        <Button title="+" onPress={this.incrementar} />
        <br/>
        <Button title="-" onPress={this.decrementar} />
      </View>
    )
  }
}


export default App;
