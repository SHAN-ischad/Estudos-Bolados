import { View, TextInput, Image, Text, Pressable, Alert, Dimensions } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { styled } from '../style/style';
import { TechCar } from '../components/atoms/logoTechCar';
import { ButtonEnv } from '../components/atoms/buttonEnv';

export default function Index() {
    let cadasterButtom
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();




    // Funcão de verificação de formulários para o usuário não conseguir enviar um formulário vazio
    const handleSubmit = () => {

        if (!email.trim()) {
            Alert.alert('Erro', 'O campo Email está vazio.');
            alert('O campo Email está vazio.');
            return;
        }
        if (!password.trim()) {
            Alert.alert('Erro', 'O campo Senha está vazio.');
            alert('O campo Senha está vazio.');
            return;
        }
        Alert.alert('Sucesso', 'Todos os campos estão preenchidos!');
        router.replace('/Drawer/service');
    };
    // Criação de variáveis para armazenar a largura e altura da tela para 
    // um design responsivo
    const { width, height } = Dimensions.get('window');

    // função que troca a cor do botão de cadastro
    const ButtonCadaster = () => {
        if (width <= 800) {
            return (
                cadasterButtom =
                <View >
                    <Pressable className='items-center w-fit p-[10px] px-[50px]  bg-blue-600  duration-[0.5s] rounded-[10px]  hover:scale-[1.1] active:scale-[1.0] hover:my-[2%] hover:translate-x-[15px] shadow-md'
                        onPress={handleSubmit}>
                        <Text className='text-white' selectable={false}>Entrar</Text>

                    </Pressable>
                </View>)

        } else {
            return (
                <Pressable
                    className='bg-white items-center w-fit p-[10px] px-[30px]  duration-[0.5s] rounded-[5px]  hover:scale-[1.1] active:scale-[1.0] hover:my-[2%] hover:translate-x-[15px]'
                    onPress={handleSubmit}
                    style={{
                        backgroundColor: width <= 800 ? '#006dff' : 'white',
                    }}
                >
                    <Text selectable={false}>Entrar</Text>
                </Pressable>
            )
        }
    }

    // função para adaptar os inputs para cada tipo de tela

    const formInputs = () => {

        if (width <= 800) {
            return (
                // Para Mobile
                <>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email' className='mt-[20px] mb-[20px] w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />

                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Senha' className='w-[70%] mb-[20px] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />
                </>
            )

        } else {
            // para Pc ou acima
            return (
                <>

                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email' className='bg-white mt-[20px] mb-[20px] w-[70%] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />

                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Senha' className='bg-white w-[70%] mb-[20px] p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />
                </>
            )

        }

    }


    const casdasterPage = () => {
        router.replace('./cadastro');
    }

    return (
        <View className='h-full w-full justify-center items-center flex-row bg-white' style={{
            flexDirection: width <= 800 ? 'column' : 'row', //ajustando o flex-direction para mobile
            overflow: width < 800 ? 'visible' : 'hidden', //ajustando o overflow para mobile

        }} >

            <View className='h-full w-fit items-center justify-center mr-[10%] flex-[100%] ' style={{
                marginBottom: width <= 1000 ? 20 : 0,
                display: width <= 800 ? 'none' : 'flex'
            }}>
                <View className='h-fit pb-[20%] ' style={{ marginTop: width <= 730 ? 10 : 0 }}>
                    <Text className='font-bold' style={{
                        fontFamily: styled.fonts.fontFamily,
                        fontSize: width <= 1000 ? 17 : 40,
                        marginTop: width <= 1000 ? '6%' : 0
                    }} >Bem vindo ao nosso site. Faça seu Login</Text>
                </View>
                <Image style={{
                    height: height <= 800 ? 250 : 500,
                    width: width <= 800 ? 250 : 500,
                }} source={require('../../assets/images/Securelogin.gif')} />
            </View>

            {/* formulário de login */}

            <View className='h-[100%]  w-fit p-[5%] bg-blue-300 rounded-[5px] items-center justify-center flex-[80%]' style={{
                width: width <= 1000 ? '100%' : '40%',
                backgroundColor: width <= 800 ? 'white' : '',
            }}>
                <TechCar height={150} widht={150} marginBottom={15} />

                <Text className='text-[22pt] text-center font-bold ' style={{ color: 'blue' }}>TechCar</Text>

                {formInputs()}


                {ButtonCadaster()}

                <View className='mt-[10px] flex-row gap-2' >
                    <Text className='font-bold text-[11pt]' selectable={false}>Não tem conta?</Text>
                    <Pressable><Text className='text-[11pt] font-bold text-blue-600 hover:text-red-500 duration-[0.4s]' onPress={casdasterPage}>Faça Seu cadastro</Text></Pressable>
                </View>
            </View>
        </View >
    );
}