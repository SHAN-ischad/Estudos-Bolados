
// Importa o Text e View do react-native
import { Text, View } from 'react-native'
// importando  o arquivo de estilos 
import styles from '../constants/styles'
export default function Primeiro() {
    return (
        <View style={styles.centralizado2}>
            <Text style={styles.Texto}>Contador com useState</Text>
        </View>
    )
}

