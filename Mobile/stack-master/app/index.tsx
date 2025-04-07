import Botao from "@/components/Button";
import styles from "@/constants/style";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.centralizado}>
      <Text >Como posso ferrar com a Elisa Sanchez</Text>
      <Botao onPress={() => {
        router.push('/nova')
      }}>
        <Link selectable={false} href="/nova" style={{ color: '#fff' }}>
          Ir para Tela Nova
        </Link>
      </Botao>
    </View>
  );
}
