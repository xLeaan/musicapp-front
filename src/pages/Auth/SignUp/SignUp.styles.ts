import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
title: {
    marginTop: 15,
    color:'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 30,
},
featureContainer: {
  marginTop: 20,
  paddingHorizontal: 16,
  alignItems: 'flex-start', 
},
 featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
},
featureText: {
    textAlign: 'left',
    color: '#fff',
    marginTop: 5,
    fontWeight: '500',
    marginLeft: 10,
    fontSize: 14,
  },
   buttonLogin: {
    marginTop: 10,
    borderWidth: 1,
    width: '200%',
    borderColor: '#FFFFFF', // blanco
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10, // completamente redondo
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
    marginTop: 20,
    borderWidth: 1,
    width: '80%',
    borderColor: '#f7cf29',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#f7cf29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },



})