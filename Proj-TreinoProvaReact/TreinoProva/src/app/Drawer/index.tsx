import Ionicons from '@expo/vector-icons/Ionicons';
// import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Pressable, View, Text, ActivityIndicator, useWindowDimensions } from 'react-native';
import { Inputs } from '@/src/components/atons/inputs';
import { ActionButton } from '@/src/components/atons/actionButton';
export default function DrawerHome() {

    const router = useRouter()
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);
    const { width, height } = useWindowDimensions()
    console.log(height)

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
        <View className={`flex-1 `} >

            {/* Header */}
            <View className='w-full justify-between flex-row '>
                <Pressable
                    onPress={() => router.replace('/')}
                    className='shadow-md bg-red-500 rounded-md ml-[10px] top-[10px] gap-[2px] w-fit h-fit p-[5px] group flex-row-reverse '>
                    <Text className='font-sans text-[13pt] text-white font-medium'>Voltar</Text>
                    <Ionicons className='top-[5px] group-hover:animate-custom-bounce' name='arrow-back' size={15} color={"white"} />
                </Pressable>
                {/* Botão Drawer */}
                <Pressable
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    className="h-fit hover:animate-pulse active:border-[2px] duration-[700ms] rounded-[10px] p-[7px]"
                >
                    <Ionicons name="menu" size={29} color="black" />
                </Pressable>

            </View>
            {/* body */}
            <View className='w-full items-center h-[700px] mt-[7%] '>

                <View className='w-full items-center'>
                    <Text className='text-[25pt] font-mono'>Bem vindo de volta</Text>

                </View>

                {/* formulário */}
                <View className='w-[45%] h-[350px] items-center shadow-lg rounded-md mt-[30px]' >
                    {/* inputs */}
                    <View className='w-[100%] mb-[30px]  gap-[20px] items-center mt-[50px]'>
                        <Inputs width={'300px'} paddind={'8px'} text={'Nome'} />

                        <Inputs width={'300px'} paddind={'8px'} text={'Cpf'} />

                    </View>

                    <ActionButton width={'200px'} color='bg-blue-500' paddind={'8px'} text={"enviar"} />

                </View>
            </View>
        </View>
    );

}
