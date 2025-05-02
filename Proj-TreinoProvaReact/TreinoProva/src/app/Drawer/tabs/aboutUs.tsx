import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Services() {

    const router = useRouter()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(time)
    }, [])


    useEffect(() => {

    })

    if (loading) {
        return (
            <View className='flex-1 justify-center items-center'>
                <ActivityIndicator size={50} color={'blue'} />

            </View>
        )
    }

    return (
        <View className='flex-1 '>
            {/* header */}
            <View className='w-full items-end'>

                <View className='h-fit hover:animate-pulse active:border-[2px] duration-[700ms] rounded-[10px]'>
                    <DrawerToggleButton />

                </View>
                {/* body */}
                <View className='w-full gap-[50px] mt-[5%] items-center'>
                    <Text className='text-[20pt] font-mono font-semibold'>Sobre nós</Text>
                    <Ionicons name='happy' size={100} color={'blue'} />
                    <Pressable
                        onPress={() => router.replace('/')}
                        className='shadow-md bg-blue-500 rounded-md  gap-[126px] w-[200px] h-fit p-[5px] group flex-row-reverse '>
                        <Text className='font-sans text-[13pt] text-white font-medium'>Voltar</Text>
                        <Ionicons className='top-[5px] group-hover:animate-custom-bounce' name='arrow-back' size={15} color={"white"} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}