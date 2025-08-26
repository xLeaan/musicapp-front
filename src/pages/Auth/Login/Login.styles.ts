// Login.styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30
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
  viewInput: {
    flexDirection: 'row', 
    marginTop: 20,
   backgroundColor: "#C0C0C0", // gris clásico Windows
  padding: 2,

  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderBottomWidth: 2,
  borderRightWidth: 2,

  borderTopColor: "#FFFFFF",   // blanco arriba
  borderLeftColor: "#FFFFFF",  // blanco izquierda
  borderBottomColor: "#808080",// gris abajo
  borderRightColor: "#808080",
  },
  input: {
    backgroundColor: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        width: 130,
        fontSize: 14,
        color: "black",

        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,

        borderTopColor: "#000000",   // negro interior arriba
        borderLeftColor: "#494444ff",  // negro interior izquierda
        borderBottomColor: "#808080",// gris interior abajo
        borderRightColor: "#808080",   // gris derecha
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
