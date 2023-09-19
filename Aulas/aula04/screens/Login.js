import { useState } from 'react';
import { View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Titulo from '../components/Titulo';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEntrar = () => {
    console.log(email,senha)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#1E1E1E',
      }}>
      <Image
        source={require('../assets/popcorn.png')}
        style={{ alignSelf: 'center', marginBottom: 24 }}
      />
      <TextInput
        label={'E-mail'}
        keybordType={'email-adress'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={'Senha'}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        contentStyle={{borderRadius:20}}
      />
      <Button onPress={props.onLogin}>Entrar</Button>
    </View>
  );
};

export default Login;
