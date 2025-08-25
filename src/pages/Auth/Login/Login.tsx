import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Touchable, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import {StyleSheet, Text} from 'react-native';
import { UserLoginProps } from '../../../interfaces/user';
import { loginService } from '../auth.service';
import { styles } from './Login.styles';
import Toast from 'react-native-toast-message';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const Login: React.FC<UserLoginProps> = ({ onLogin, onSignup }) => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  

  const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
  }

  async function handleLogin() {
    try {
      const user = await loginService(email, contrasena);
      
    if (user) {

      Toast.show({
            type: 'success',
            text1: 'Login exitoso',
            text2: 'Bienvenido/a ' + user.nombre,
      });

      setIsError(false);
      onLogin(user); 
    } else {
      setMessage("Error al intentar iniciar sesión.");
      setIsError(true);
    }
  } catch (error) {
    setMessage("Error en la solicitud de login.");
    console.log("Error:", error);
    setIsError(true);
  }
}

  
  return (
      
      
    <ScrollView style={{ backgroundColor: '#ADADAD' }}>
     <View style={{ height: 60, backgroundColor: '#020FAB', justifyContent: 'center', paddingHorizontal: 15 }}>
    <Text style={{ color: 'white', fontSize: 20 }}>Musicapp</Text>
  </View>
    <View style={styles.container}>
        <Image source={require('../../../img/logo_fondo_negro.png')} style={styles.logo} />
        <Text style={styles.title}>Solo entra. Lo demás está cubierto.</Text>

      <TextInput style={styles.input} 
        placeholder="Email"
        placeholderTextColor={'#7b7b7b'}
        value={email}
        onChangeText={setEmail} />
      <TextInput style={styles.input} 
        placeholder="Contraseña"
        placeholderTextColor={'#7b7b7b'}
        value={contrasena}
        onChangeText={setContrasena} 
        secureTextEntry={true} />
      <Text style={{ color: 'white', marginTop: 20}}>¿Olvidaste tu contraseña?</Text>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={styles.textLogin}>Ingresar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 20}}>
        <Text style={{ color: 'white'}}>No tienes una cuenta? </Text>
          <TouchableOpacity onPress={onSignup}>
            <Text style={styles.registerText}>Registro</Text>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}



export default Login;
