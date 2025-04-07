import { Text, View, Button, } from 'react-native';
import { useState } from 'react';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function Contador() {
    let [contador, setContador] = useState(0)

    const Contar = () => {
        if (contador >= 0) {
            setContador(contador + 1)
            console.log(" a quantidade de clicks foram " + (contador + 1))

        } else {
            console.log("algo deu errado, reinicie a página")
        }
    }

    const Reset = () => {
        if (contador >= 1) {
            setContador(contador = 0)
        } else {
            console.log('O contador está vazio')
        }

    }

    const Subtraction = () => {
        if (contador >= 1) {
            setContador(contador - 1)
        } else {
            console.log("o contador é igual a zero, não tem como subtrair")
        }
    }
    return (
        <View>
            <View style={{ width: '100%', alignItems: 'flex-end' }}>
                <DrawerToggleButton />
            </View>

            <View style={{ width: '20%', marginLeft: '10%', flexDirection: 'row', gap: 10 }}>
                <Button title='Contar' onPress={Contar} />
                <Button title='Resetar' onPress={Reset} />
                <Button title='Menos 1' onPress={Subtraction} />
            </View>

            <View style={{
                justifyContent: 'center', flex: 1, alignItems: 'center',
                marginTop: '10%',
            }}>
                <Text style={{ fontSize: 30 }}>{contador}</Text>
            </View>
        </View>
    );
}