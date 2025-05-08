import Ionicons from '@expo/vector-icons/Ionicons';
// import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Pressable, View, Text, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { newUser } from '../../hooks/newUsers';

export default function DrawerHome() {
    let { usuario, setUsuario, salvar, error, setError } = newUser()

    const router = useRouter()
    const navigation = useNavigation()
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
        <View className='flex-1 ' >

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
            <View className='w-full h-[500px] mt-[7%] '>

                <View className='w-full items-center'>
                    <Text className='text-[25pt] font-mono'>Bem vindo</Text>

                </View>

                {/* formulário */}
                <View className='w-full justify-center items-center mt-[2%] '>


                    <View className='w-[500px] h-[390px] bg-gray-200 rounded-[10px] flex-col items-center gap-[20px]'>
                        <Text className='text-[16pt] font-bold mt-[20px] font-mono'>Se cadastre</Text>

                        <TextInput
                            value={usuario.name ?? ''}

                            onChangeText={(nome) => setUsuario({ ...usuario, name: nome })}
                            placeholder='Nome'
                            className='w-[300px] p-[10px] 
                            mt-[10px] border-[1.7px] rounded-[7px] 
                            bg-white placeholder:text-[12pt] focus:rounded-[2px] duration-[300ms]' />
                        {error.name && <Text className='text-red-500 border-red-500 h-fit'>{error.name}</Text>}

                        <TextInput
                            value={usuario.email ?? ''}
                            onChangeText={(email) => setUsuario({ ...usuario, email: email })}
                            placeholder='Email'
                            className='w-[300px] p-[10px] 
                            mt-[10px] border-[1.7px] rounded-[7px] 
                            bg-white placeholder:text-[12pt] focus:rounded-[2px] duration-[300ms]' />
                        {error.email && <Text className='text-red-500 border-red-500'>{error.email}</Text>}

                        <TextInput
                            value={usuario.password ?? ''}
                            onChangeText={(password) => setUsuario({ ...usuario, password: password })}
                            placeholder='Senha'
                            className='w-[300px] p-[10px] 
                            mt-[10px] border-[1.7px] rounded-[7px] 
                            bg-white placeholder:text-[12pt] focus:rounded-[2px] duration-[300ms]' />
                        {error.password && <Text className='text-red-500 border-red-500 h-fit'>{error.password}</Text>}


                        <Pressable
                            onPress={() => {
                                salvar()
                                router.push('/Drawer/tabs')

                            }}
                            className='w-[50%] bg-blue-500 rounded-[7px] items-center hover:bg-blue-700 active:scale-[0.89] duration-[300ms]' >
                            <Text className='text-[15pt] font-bold text-white p-[10px] '>Cadastrar</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </View>
    );
}