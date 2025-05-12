import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de que AsyncStorage esté importado correctamente
import FirstScreen from './src/pages/FirstScreen';
import AdminScreen from './src/pages/AdminScreen';
import Login from './src/pages/Auth/Login';
import Signup from './src/pages/Auth/SignUp';
import { User } from './src/interfaces/user'; 
import Toast from 'react-native-toast-message';

export default function App() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Función para verificar si el usuario ya está logueado
  const checkUserLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Verificamos si existe el token
      if (token) {
        setShowLogin(false); // Si hay un token, mostramos la pantalla de FirstScreen
      } else {
        setShowLogin(true); // Si no hay token, mostramos el login
      }
    } catch (error) {
      console.error("Error checking user login status:", error);
      setShowLogin(true); // Si ocurre un error, mostramos el login por defecto
    }
  };

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Eliminar el token de AsyncStorage
      setShowLogin(true); // Volver a mostrar el login
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Efecto para verificar el estado de login al iniciar la aplicación
  useEffect(() => {
    checkUserLoggedIn();
  }, []); // Se ejecuta solo una vez al iniciar

  function handleLogin(user: User) {
    setUser(user);
    setShowLogin(false); // Cuando el usuario se loguea, ocultamos la pantalla de login
  }

  function handleSignup() {
    setShowSignup(true);
    setShowLogin(false); // Al registrarse, ocultamos el login
  }

  function onBackToLogin() {
    setShowSignup(false);
    setShowLogin(true); // Volver al login desde el registro
  }

  // if (showLogin) {
  //   return <Login onLogin={handleLogin} onSignup={handleSignup} />;
  // }

  // if (showSignup) {
  //   return <Signup onSignup={handleSignup} onLogin={onBackToLogin} />;
  // }

  return (
  <>
    {showLogin ? (
      <Login onLogin={handleLogin} onSignup={handleSignup} />
    ) : showSignup ? (
      <Signup onSignup={handleSignup} onLogin={onBackToLogin} />
    ) : !user ? (
      <></> // o un <Loading /> si prefieres
    ) : user.rol_id == '2' ? (
      <AdminScreen onLogout={handleLogout} user={user} />
    ) : (
      <FirstScreen onLogout={handleLogout} user={user} />
    )}
    
    <Toast />
  </>
);

  
}
