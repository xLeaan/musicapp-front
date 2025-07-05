import { API_URL } from '@env';
import { User } from '../../interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export async function authService(user: User) {
  console.log("API_URL:", API_URL);
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });


        if (!response.ok) {
            const resText = await response.text();
            console.log("Status:", response.status);
            console.log("usuario:", user);
            console.log("Body:", resText);
            throw new Error('Error en la autenticación');
           
        }
        return await response.json();
        
    } catch (error) {
        throw error;
    }
}

export async function loginService(email: string, contrasena: string) {

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contrasena }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Si la respuesta es exitosa, almacenamos el token en AsyncStorage
        if (data.token) {
          Toast.show({
            type: 'success',
            text1: 'Login exitoso'
          });

          console.log("Usuario logueado:", data.user, "token:", data.token);
          await AsyncStorage.setItem('token', data.token);
          return data.user; 
        } else {
          console.log("Error: No se recibió token.");
          return null;
        }
      } else {
        console.log("Error al loguear usuario:", data.message || data.error);
        return null;
      }
    } catch (error) {
      console.error("Error en la solicitud de login:", error);
      return null;
    }
  }
  