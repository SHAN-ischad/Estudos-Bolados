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
        return <View className='h-full w-full bg-white justify-center 
        items-center'><Text>Carregando...</Text></View>
    } else {
        return (
            <View className='h-full w-full bg-white overflow-auto overflow-x-hidden ' >
                <View className=''>
                    <HeaderService />
                </View>

                <View className='w-full items-center mt-[5%]'>
                    {/* Top Text */}
                    <Text className='font-bold text-[20pt]'>Bem vindo a área de serviços</Text>
                    <Text className='font-bold text-[20pt]'>Crie seus serviços e configure-os</Text>
                </View>

                <View className='w-full mt-[2%]' >
                    <ContentPage />
                </View>
            </View>
        );
    }

}
