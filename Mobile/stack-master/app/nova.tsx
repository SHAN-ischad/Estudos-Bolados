import Botao from '@/components/Button';
import styles from '@/constants/style';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

export default function Nova() {
    return (
        <View style={styles.centralizado}>
            <Text >Como posso ferrar com a Elisa Sanchez</Text>
            <Botao onPress={() => {
                router.push('./');
            }}>
                <Link selectable={false} href='./'>
                    Voltar</Link>
            </Botao>
        </View>
    );
}