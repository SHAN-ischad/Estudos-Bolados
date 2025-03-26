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
    } else {
        return (
            <View className='h-full w-full bg-white ' >
                <View className=''>
                    <HeaderService />
                </View>

                <View className='w-full ml-[5%] mt-[10%]' >
                    <ContentPage />
                </View>
            </View>
        );
    }

}
