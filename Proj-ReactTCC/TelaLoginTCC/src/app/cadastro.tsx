import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { TextInput, View, Text, Pressable, Image, Alert } from 'react-native';
import { ButtonEnv } from '../components/atoms/buttonEnv';
import { styled } from '../style/style';
import { Dimensions } from 'react-native';
import { TechCar } from '../components/atoms/logoTechCar';

export default function Cadastro() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');



    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    const redirect = () => {

        // condicional para verificar se o usuário preencheu os campos corretamente,
        // dentro de uma função
        if (userName.trim() === '' || userEmail.trim() === '' || userPassword.trim() === '') {
            Alert.alert('Error, Preencha todos os campos para se cadastrar!')
            alert('Error, Preencha todos os campos para se cadastrar!')
        } else {
            Alert.alert('Sucesso. Cadastro realizado com sucesso!')
            alert('Sucesso. Cadastro realizado com sucesso!')
            router.replace('/Drawer/home');
        }

    }

    const goToLogin = () => {
        router.push('/')
    }



    const formInputs = () => {
        if (width <= 800) {
            return (
                <>
                    <TextInput
                        value={userName}
                        onChangeText={setUserName}
                        placeholder='Nome' className='mt-[20px] mb-[20px] w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt] placeholder:text-black' />

                    <TextInput
                        value={userEmail}
                        onChangeText={setUserEmail}
                        placeholder='Email' className='mt-[20px] mb-[20px] w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt] placeholder:text-black' />

                    <TextInput
                        value={userPassword}
                        onChangeText={setUserPassword}
                        placeholder='Senha' className='mt-[20px] mb-[20px] w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt] placeholder:text-black' />
                </>
            )
        } else {
            return (
                <View className='my-[20px] w-full items-center gap-[15px]'>
                    <TextInput
                        value={userName}
                        onChangeText={setUserName}
                        placeholder='Nome' className='bg-white   w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt] ' />

                    <TextInput
                        value={userEmail}
                        onChangeText={setUserEmail}
                        placeholder='Email' className='bg-white  w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />

                    <TextInput
                        value={userPassword}
                        onChangeText={setUserPassword}
                        placeholder='Senha' className='bg-white w-[70%]  p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />
                </View>
            )
        }
    }

    if (isLoading) {
        return <View className='h-full w-full bg-white justify-center items-center'><Image style={{
            height: 200,
            width: 200,
        }} source={require('../../assets/images/Techcar.png')} /></View>
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
                <View className=' h-fit pb-[2%] w-[35%] rounded-[8px]   items-center  justify-center  ' style={{
                    width: width <= 800 ? '90%' : '35%',
                }}>
                    <TechCar
                        height={170}
                        widht={170} />
                    <Text className='text-[15pt] mb-[12px] font-bold '>Cadastro</Text>

                    {formInputs()}
                    <ButtonEnv textButton='Cadastrar' action={redirect} />

                    <View className='mt-[10px] flex-row gap-2' >
                        <Text className='font-bold text-[11pt]' selectable={false}>Já tem conta?</Text>
                        <Pressable><Text className='text-[11pt] font-bold text-blue-600 hover:text-red-500 duration-[0.4s]' onPress={goToLogin}>Faça Seu Login</Text></Pressable>
                    </View>
                </View>
            </View>
        );
    }
}