import { View, TextInput, Image, Text, Pressable, Alert, Dimensions } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
export default function Index() {
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

    const casdasterPage = () => {
        router.replace('./cadastro');
    }

    return (
        <View className='h-full w-full justify-center items-center flex-row bg-white' style={{
            flexDirection: width <= 800 ? 'column' : 'row', //ajustando o flex-direction para mobile
            overflow: width < 800 ? 'visible' : 'hidden', //ajustando o overflow para mobile

        }} >

            <View className='h-full w-fit items-center justify-center mr-[10%] flex-[100%] ' style={{ marginBottom: width <= 1000 ? 20 : 0 }}>
                <View className='h-fit pb-[20%] ' style={{ marginTop: width <= 730 ? 10 : 0 }}>
                    <Text className='font-bold text-[28pt] mt-[2%]' style={{
                        fontSize: width <= 1000 ? 17 : 28,
                        marginTop: width <= 1000 ? '6%' : 0
                    }} >Bem vindo ao nosso site. Faça seu Login</Text>
                </View>
                <Image style={{
                    height: height <= 800 ? 250 : 600,
                    width: width <= 800 ? 250 : 600,
                }} source={require('../../assets/images/Securelogin.gif')} />
            </View>

            {/* formulário de login */}

            <View className='h-full w-fit p-[5%] bg-blue-300 rounded-[5px] items-center justify-center flex-[100%]' style={{ width: width <= 1000 ? '100%' : '40%' }}>
                <Text className='text-[22pt] text-center font-bold ' style={{ color: 'blue' }}>TechCar</Text>

                <Text className='font-bold text-[15pt] mb-[10px] mt-[20px]'>Escreva seu email</Text>
                <TextInput
                    className='w-[60%] py-[10px] bg-white rounded-[5px] mb-[20px]'
                    placeholder='escreva aqui'
                    value={email}
                    onChangeText={setEmail}
                />

                <Text className='font-bold text-[15pt] mb-[10px]'>Escreva sua senha</Text>
                <TextInput
                    className='w-[60%] py-[10px] bg-white rounded-[5px] mb-[20px]'
                    placeholder='escreva aqui'
                    keyboardType='visible-password'
                    value={password}
                    onChangeText={setPassword}
                />

                <Pressable
                    className='bg-white items-center w-fit p-[10px] px-[30px]  duration-[0.5s] rounded-[5px]  hover:scale-[1.1] active:scale-[1.0] hover:my-[2%]'
                    onPress={handleSubmit}
                >
                    <Text selectable={false}>Cadastrar</Text>
                </Pressable>
                <View className='mt-[10px] flex-row gap-2' >
                    <Text className='font-bold text-[11pt]' selectable={false}>Não tem conta?</Text>
                    <Pressable><Text className='text-[11pt] font-bold' style={{ color: 'blue' }} onPress={casdasterPage}>Faça Seu cadastro</Text></Pressable>
                </View>
            </View>
        </View >
    );
}