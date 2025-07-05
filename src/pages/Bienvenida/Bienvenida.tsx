import React from 'react'
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Bienvenida.styles';

const Bienvenida = ({ onContinue, onRegister }: { onContinue: () => void; onRegister: () => void; }) => (
    <ScrollView style={{ backgroundColor: '#000000' }}>
        <View style={styles.container}>
            <Image source={require('../../img/logo_fondo_negro.png')} style={styles.logo} />
            <Text style={styles.title}>RUTA CONFIABLE</Text>
            <Text style={styles.subtitle}>Simple. Seguro. Confiable</Text>
            <TouchableOpacity style={styles.buttonRegister} onPress={onRegister}>
                <Text style={styles.textRegister}>Crear Cuenta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={onContinue}>
                <Text style={styles.textLogin}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

);

export default Bienvenida;
