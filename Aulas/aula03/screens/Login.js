import {View, Text, TextInput, StyleSheet,Button, Image} from "react-native"

const Login = () => {
  return<View style={styles.container01}>
  <Image source={require("../assets/snack-icon.png")} style={styles.logo}/>
  <Text style={styles.titulo}>Login</Text>
  <TextInput placeholder={"E-mail"} keyboardType={"email-address"} style={styles.input}/>
  <TextInput placeholder={"Senha"} secureTextEntry={true} style={styles.input}/>
  <Button title="Entrar"/>
  </View>
}

const styles = StyleSheet.create({
  container01 : {
    flex: 1, 
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logo: {
    height: 72,
    width: 72,
    marginBottom: 24,
    alignSelf:"center"
  },
  titulo: {
    fontSize: 28,
    fontWeight: 400,
    textAlign: "center",
    paddingBottom: 24,
  },
  input: {
    lineHeight: 24,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightblue",
    padding: 16,
    marginBottom: 16,
  }
})


export default Login;