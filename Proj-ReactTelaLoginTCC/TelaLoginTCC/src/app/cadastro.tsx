import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Cadastro() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    const redirect = () => {
        router.replace('/Drawer/service');
    }

    if (isLoading) {
        return <View className='h-full w-full bg-white justify-center items-center'><Text>Carregando...</Text></View>
    } else {
        return (
            <View className='h-full  justify-center flex-row-reverse gap-[10%]  items-center' >
                <View className=' items-center justify-center'>

                    <Text className='text-[22pt] font-bold  '>Seja bem vindo.</Text>
                    <Text className='text-[22pt] font-bold '>Crie sua conta para fazer uso de nosso aplicativo</Text>
                    <Ionicons name='globe' size={100} color={'blue'} />

                </View>
                <View className=' h-[50%] w-[35%] text-white  items-center  justify-center  '>
                    <Text className='text-[15pt] mb-[12px] font-bold '>Cadastro</Text>
                    {/* nome */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite seu nome</Text>
                    <TextInput className='p-[12px] rounded-[5px] shadow-md w-[50%] mb-[15px] text-black bg-white' placeholder='Digite aqui' />

                    {/* email */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite seu email</Text>
                    <TextInput className='p-[12px] rounded-[5px] shadow-md w-[50%] mb-[15px] text-black bg-white' placeholder='Digite aqui' />

                    {/* senha */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite sua senha</Text>
                    <TextInput className='p-[12px] rounded-[5px] shadow-md w-[50%] bg-white text-black' placeholder='Digite aqui' />

                    <Pressable onPress={redirect} className='w-[30%] py-[15px] flex-row justify-center rounded-[5px] bg-white hover:bg-green-200 hover:my-[2%] duration-200 shadow-md mt-[30px]'>
                        <Text className='text-[12pt] font-bold'>Cadastrar</Text>
                        <Ionicons name='person-add' size={20} color='blue' />
                    </Pressable>
                </View>
            </View>
        );
    }
}