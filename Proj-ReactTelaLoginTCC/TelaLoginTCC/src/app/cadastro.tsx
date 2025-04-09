import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styled } from '../style/style';
import { Dimensions } from 'react-native';
import { TechCar } from '../components/atoms/logoTechCar';

export default function Cadastro() {


    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

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
            <View className='h-full  justify-center flex-row-reverse gap-[10%]  items-center' style={{
                flexDirection: width <= 800 ? 'column' : 'row-reverse',

            }} >
                <View className=' items-center justify-center' style={{
                    display: width <= 800 ? 'none' : 'flex',
                }}>


                    <Text className='text-[22pt] font-bold  ' style={{
                        fontFamily: styled.fonts.fontFamily,
                        fontSize: width <= 1000 ? 35 : 28,

                    }}>Seja bem vindo.</Text>

                    <Text className='text-[22pt] font-bold ' style={{
                        fontFamily: styled.fonts.fontFamily,
                        display: width <= 1000 ? 'none' : 'flex',
                    }}>Crie sua conta para fazer uso de nosso aplicativo</Text>
                    <Image style={{
                        height: height <= 1000 ? 450 : 500,
                        width: width <= 1000 ? 400 : 500,
                        marginTop: width <= 800 ? 0 : 20,
                    }} source={require('../../assets/images/Computer.gif')} />

                </View>
                <View className=' h-[65%] w-[35%] rounded-[8px] text-white shadow-md items-center  justify-center  ' style={{
                    width: width <= 800 ? '90%' : '35%',
                }}>
                    <TechCar heightImage={100} widhtImage={100} />

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

                    <Pressable onPress={redirect} className='w-[30%] gap-[5px] py-[15px] flex-row justify-center rounded-[5px] bg-white active:bg-green-400 hover:mb-[2%] hover:translate-x-[8px] duration-200 shadow-md mt-[30px]'>
                        <Text className='text-[12pt] font-bold'>Cadastrar</Text>
                        <Ionicons name='person-add' size={20} color='blue' />
                    </Pressable>
                </View>
            </View>
        );
    }
}