import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Touchable, TouchableOpacity, Image } from 'react-native';
import {StyleSheet, Text} from 'react-native';
import { UserLoginProps } from '../../interfaces/user';
import { loginService } from './auth.service';


const Login: React.FC<UserLoginProps> = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  

  async function handleLogin() {
    try {
      const user = { email, contrasena };
      const response = await loginService(email, contrasena);
      setMessage("Login exitoso!");
      setIsError(false);
      onLogin(user);
    } catch (error) {
      setMessage('Error al loguear');
      console.log("Error al loguear usuario:", error);
      setIsError(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        {/* <Image source={require('../../img/icon.jpg')} style={styles.image} /> */}
        <Text>Ruta confiable</Text>
      </View>
      <View style={styles.container}>
      <TextInput style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail} />
      <TextInput style={styles.input} 
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena} 
        secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20}}>
        <Text>No tienes una cuenta? </Text>
          <TouchableOpacity onPress={onSignup}>
            <Text style={styles.registerText}>Registro</Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    backgroundColor: '#9E37FA',
    flex: 1,
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position: 'absolute'
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 300,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
