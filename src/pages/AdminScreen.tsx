import React from "react";
import { User } from "../interfaces/user";
import { Text, View, StyleSheet, Button } from "react-native";

const AdminScreen = ({ user, onLogout }: { user: User; onLogout: () => void }) => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido administrador!</Text>
      
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdminScreen;
