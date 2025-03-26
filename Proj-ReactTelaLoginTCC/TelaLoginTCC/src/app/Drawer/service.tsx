import { View, Text, TextInput, Pressable } from 'react-native';
import { HeaderService } from '../../components/screens/servicePage/header';
import { ContentPage } from '../../components/screens/servicePage/content';
import { useEffect, useState } from 'react';

export default function Service() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <View className='h-full w-full bg-white justify-center items-center'><Text>Carregando...</Text></View>
    }
    return (
        <View className='h-full w-full bg-white' >
            <View >
                <HeaderService />
            </View>

            <View className='h-full bg-black'>
                <TextInput placeholder='Digite um nome ao serviço' className='p-[10px] bg-black' />
                <Pressable>
                    <Text selectable={false}>Criar</Text>
                </Pressable>
            </View>
        </View>
    );
}
