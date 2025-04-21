import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const FirstScreen = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
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

export default FirstScreen;
