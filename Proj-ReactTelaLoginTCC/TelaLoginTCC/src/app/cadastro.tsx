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
        }, 1000)
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
            router.replace('/Drawer/service');
        }

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
                <View className=' h-fit pb-[2%] w-[35%] rounded-[8px] text-white shadow-md items-center  justify-center  ' style={{
                    width: width <= 800 ? '90%' : '35%',
                }}>
                    <TechCar
                        height={170}
                        widht={170} />
                    <Text className='text-[15pt] mb-[12px] font-bold '>Cadastro</Text>
                    {/* nome */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite seu nome</Text>
                    <TextInput
                        value={userName}
                        onChangeText={setUserName}
                        className='p-[12px] rounded-[5px] shadow-md w-[50%] mb-[15px] text-black bg-white' placeholder='Digite aqui' />

                    {/* email */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite seu email</Text>
                    <TextInput
                        value={userEmail}
                        onChangeText={setUserEmail}
                        className='p-[12px] rounded-[5px] shadow-md w-[50%] mb-[15px] text-black bg-white' placeholder='Digite aqui' />

                    {/* senha */}
                    <Text className='text-[15pt] font-bold mb-[10px]'>Digite sua senha</Text>
                    <TextInput
                        value={userPassword}
                        onChangeText={setUserPassword}
                        className='p-[12px] rounded-[5px] shadow-md w-[50%] bg-white text-black' placeholder='Digite aqui' />

                    <ButtonEnv textButton='Cadastrar' action={redirect} />
                </View>
            </View>
        );
    }
}