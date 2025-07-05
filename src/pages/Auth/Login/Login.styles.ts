// Login.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    marginTop: 80,
  },
  title: {
    color: '#f7cf29',
    fontSize: 45,
    fontWeight: '700',
    textAlign: 'center'
  },
   input: {
    marginTop: 20,
    borderWidth: 1,
    width: '90%',
    borderColor: '#373737', // blanco
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10, // completamente redondo
    backgroundColor: 'transparent', // fondo transparente
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
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
    color: '#f7cf29',
    textDecorationLine: 'underline',
  },
  buttonLogin: {
    marginTop: 20,
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
  textLogin: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
