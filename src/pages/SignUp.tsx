import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import {StyleSheet, Text} from 'react-native';


interface SignupProps {
  onSignup: (user: User) => void;
  onLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup, onLogin  }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSignup() {
    // Aquí debes implementar la lógica de registro, por ejemplo, llamando a un servicio de backend
    // para crear una nueva cuenta de usuario
    const user = { email, username, name, password }; // Este es solo un ejemplo, debes modificarlo según tu lógica de registro
    onSignup(user);
  }

  function handleBackToLogin() {
    onLogin(); // Llama a la función onLogin para volver a la pantalla de inicio de sesión
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail} />
      <TextInput style={styles.input} 
        placeholder="Name"
        value={name}
        onChangeText={setName} />
      <TextInput style={styles.input} 
        placeholder="Username"
        value={username}
        onChangeText={setUsername} />
      <TextInput style={styles.input} 
        placeholder="Password"
        value={password}
        onChangeText={setPassword} 
        secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignup} />
      <View style={styles.buttonSpacer} />
        <Button title="Back" onPress={handleBackToLogin} />
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
});

export default Signup;
