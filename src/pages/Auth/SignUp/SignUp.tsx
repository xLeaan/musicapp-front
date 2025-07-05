import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { authService } from '../auth.service';
import { UserRegisterProps } from '../../../interfaces/user';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './SignUp.styles';
import Toast from 'react-native-toast-message';


const Signup: React.FC<UserRegisterProps> = ({ onSignup, onLogin }) => {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [num_documento, setNum_documento] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  async function handleSignup() {
    try {
      const user = { 
        email, 
        nombre, 
        num_documento,
        celular, 
        contrasena, 
        rol_id: '1', 
         };
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
    <ScrollView style={{ backgroundColor: '#000000' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Crea tu cuenta y viaja con tranquilidad desde el primer trayecto</Text>
        <TextInput style={styles.input}
          placeholder="Nombre Completo"
          placeholderTextColor="#7b7b7b"
          value={nombre}
          onChangeText={setNombre} />
        <TextInput style={styles.input}
          placeholder="Cédula o Pasaporte"
          placeholderTextColor="#7b7b7b"
          value={num_documento}
          onChangeText={setNum_documento} />
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7b7b7b"
          value={email}
          onChangeText={setEmail} />
        <TextInput style={styles.input}
          placeholder="Celular"
          placeholderTextColor="#7b7b7b"
          value={celular}
          onChangeText={setCelular} />
        <TextInput style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#7b7b7b"
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={true} />
        <View style={styles.featureContainer}>
        <View style={styles.featureRow}>
          <MaterialCommunityIcons name="fingerprint" size={30} color="#f7cf29" />
          <Text style={styles.featureText}>Huella digital</Text>
        </View>

        <View style={styles.featureRow}>
          <MaterialCommunityIcons name="face-man-shimmer" size={30} color="#f7cf29" />
          <Text style={styles.featureText}>Reconocimiento facial en tiempo real</Text>
        </View>

        <View style={styles.featureRow}>
          <MaterialCommunityIcons name="file-document" size={30} color="#f7cf29" />
          <Text style={styles.featureText}>Reconocimiento facial en tiempo real</Text>
        </View>
      </View>
        <View>
          <TouchableOpacity style={styles.buttonRegister} onPress={handleSignup}>
                          <Text style={styles.textRegister}>Registrarme con confianza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogin} onPress={handleBackToLogin}>
                          <Text style={styles.textLogin}>Ir a iniciar sesión</Text>
          </TouchableOpacity>
          <View />
          {message !== '' && (
            <Text>
              {message}
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};


export default Signup;
