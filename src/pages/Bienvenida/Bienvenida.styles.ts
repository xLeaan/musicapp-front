import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    marginTop: 80,
  },
  title: {
    color: '#f7cf29',
    fontSize: 56,
    fontWeight: '700',
    textAlign: 'center'
  },
  subtitle: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
  },
  buttonLogin: {
    marginTop: 10,
    borderWidth: 1,
    width: '80%',
    borderColor: '#FFFFFF', // blanco
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50, // completamente redondo
    backgroundColor: 'transparent', // fondo transparente
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 40,
    borderWidth: 1,
    width: '80%',
    borderColor: '#f7cf29',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    backgroundColor: '#f7cf29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
 
});