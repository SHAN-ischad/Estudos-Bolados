import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

export default function TelaInicial() {
    const nav = useNavigation()
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="logo-react" size={100} />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Revisão React Native</Text>
                <Text style={{ fontSize: 16 }}>Desevolvedor Mobile</Text>
            </View>
            <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
                <Text style={{ color: '#fff' }}>Navegação</Text>
            </Botao>
        </View>
    )
}