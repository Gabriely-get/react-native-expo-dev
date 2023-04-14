import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';

export default function App(){

  const [contador, setContador] = useState(0);

  return(
    <View style={{ marginTop: 20, padding: 10 }}>

      <Text style={{fontSize: 200, color: 'red', textAlign: 'center'}}>
        {contador}
      </Text>

      
      <Button title="+" onPress={ () => setContador((contador + 1)) } />
      <br/>
      <Button title="-" onPress={ () => { if (contador > 0) { setContador((contador-1)) } }} />
    </View>
  )

}
