import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { authService } from './auth.service';
import { UserRegisterProps } from '../../interfaces/user';
import Toast from 'react-native-toast-message';


const Signup: React.FC<UserRegisterProps> = ({ onSignup, onLogin }) => {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState(''); 
  const [foto, setFoto] = useState(''); 
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

async function handleSignup() {
    try {
      const user = { 
        email, 
        nombre, 
        apellido, 
        contrasena, 
        rol_id: '1', 
        foto };
      const result = await authService(user);

      Toast.show({
        type: 'success',
        text1: 'Registro exitoso',
        text2: 'Has creado tu usuario correctamente!',
      });

      setIsError(false);
      console.log("registro:", user);
      onSignup(user);
      onLogin();

    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error al registrar',
        text2: 'Revisa los datos ingresados',
      });

      setIsError(true);
    }
  }

  function handleBackToLogin() {
    onLogin(); 
  }

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <TextInput style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail} />
      <TextInput style={styles.input} 
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre} />
      <TextInput style={styles.input} 
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido} />
      <TextInput style={styles.input} 
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena} 
        secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={handleSignup} />
      <View style={styles.buttonSpacer} />
        <Button title="Atrás" onPress={handleBackToLogin} />
        {message !== '' && (
          <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>
            {message}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonSpacer: {
    height: 10,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green', 
  },  
});

export default Signup;
