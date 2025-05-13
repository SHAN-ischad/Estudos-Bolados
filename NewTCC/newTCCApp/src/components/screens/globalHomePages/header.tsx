import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';
import { GlobalInputs } from '../../atoms/globalInputs';
import { TechCar } from '../../atoms/logoTechCar';

export function HeaderGlobalHome() {
    return (
        <View className='w-full justify-between items-center flex-row'>
            {/* Logo */}
            <View className='ml-[10%]'>
                <TechCar height={79} widht={79} />
            </View>
            {/* inputs for Search */}
            <View className='h-fit w-[500px]'>
                <GlobalInputs
                    backgroundColor=''
                    borderRadius='10px'
                    marginBottom=''
                    marginLeft=''
                    marginRight=''
                    marginTop=''
                    padding='10px'
                    placeholder='Pesquise'
                    value=''
                />
            </View>
            {/* user Area */}
            <View className='w-fit mr-[10%]'>
                <View className='flex-row items-center gap-[20px] relative'>
                    <Image
                        className='w-[50px] border-[2px] rounded-full h-[50px]'
                        source={{ uri: 'https://github.com/SHAN-ischad.png' }}
                    />
                    <Pressable className='relative flex-row group/calendar'>
                        <Ionicons name='today-outline' size={40} />
                        {/* Hover Area */}
                        <View className='absolute p-[15px] top-[45px] left-[-70px] shadow-md w-fit bg-white text-black text-[8pt] rounded hidden group-hover/calendar:block'>
                            {/* User Options */}
                            <View className='items-center w-[200px]'>
                                <Pressable className='p-[10px] rounded-lg items-center bg-green-500 w-[130px]'>
                                    <Text className='text-[12pt] text-white font-semibold'>Entrar</Text>
                                </Pressable>
                                <Text className='mt-2 text-center border-b w-full'>Opções do Usuário</Text>
                                {/* user options */}
                                <View className='mt-[10px] gap-[7px]'>
                                    {/* Settings */}
                                    <Pressable className='w-full gap-[3px] flex-row group/pressables1'>
                                        <Ionicons name='settings-outline' size={22} color={'orange'} />
                                        <Text className='text-[12pt] font-medium group-hover/pressables1:ml-[20px] duration-300'>Configurações</Text>
                                    </Pressable>

                                    {/* Home */}
                                    <Pressable className='w-full gap-[5px] flex-row group/pressables2'>
                                        <Ionicons name='home-outline' size={22} color={'orange'} />
                                        <Text className='text-[12pt] font-medium ml-0 group-hover/pressables2:ml-[20px] duration-300'>
                                            Tela Principal
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}