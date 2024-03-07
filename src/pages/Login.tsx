import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Touchable, TouchableOpacity, Image } from 'react-native';
import {StyleSheet, Text} from 'react-native';

interface LoginProps {
  onLogin: (user: User) => void;
  onSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');


  function handleLogin() {
    // Aquí debes implementar la lógica de autenticación, por ejemplo, llamando a un servicio de backend
    // para verificar las credenciales del usuario
    const user = { email , id }; // Este es solo un ejemplo, debes modificarlo según tu lógica de autenticación
    onLogin(user);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={require('../img/icon.jpg')} style={styles.image} />
        <Text>AvatarApp</Text>
      </View>
      <View style={styles.container}>
      <TextInput style={styles.input} 
        placeholder="Username"
        value={email}
        onChangeText={setEmail} />
      <TextInput style={styles.input} 
        placeholder="Password"
        value={id}
        onChangeText={setId} 
        secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20}}>
        <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={onSignup}>
            <Text style={styles.registerText}>Register</Text>
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
