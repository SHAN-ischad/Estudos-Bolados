import Botao from '@/components/Botao';
import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function TelaCursos() {
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
             <Ionicons name = "settings-outline" 
             size={100} color="#000000"/>
            <Text style={{ fontSize: 20, 
                fontWeight: '700' }}>Cursos</Text>
            </View>
    );
}