import {View, Text, TextInput, Button, StyleSheet} from "react-native"

const Login = () => {
return <View style={styles.container}>
<Text style={styles.title}>Login</Text>
<TextInput placeholder={"E-mail"} keyboardType={"email-address"} style={styles.input}/>
<TextInput placeholder={"Senha"} secureTextEntry={"password"} style={styles.input}/>
<Button title={"Entrar"}/>
</View>
}

const styles = StyleSheet.create({
  container : {
  flex:1,
  justifyContent: "center",
  alignItems: "center",
  padding: 16
},
title:{
  fontSize: 24 , 
  fontWeight:'bold',
  paddingBottom: 24
},
input: {
  width: '100%' , 
  height: 48 , 
  borderColor: "gray", 
  borderWidth: 1, 
  marginBottom: 16,
  paddingLeft: 8,
  borderRadius:10,
}
})


export default Login