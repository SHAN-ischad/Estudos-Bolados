import { Pressable, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


export default function Home() {

    const router = useRouter();
    return (
        <View className='flex-1 '  >
            <Text className='text-[25pt] ml-[5%] mt-[1%] font-mono'>Bem vindo.{'\n'}Escolha para onde irá navegar</Text>

            <View className='w-full flex-row gap-[20px] h-[200px] justify-center items-center  mt-[5%]'>
                <Pressable
                    onPress={() => router.push('./Drawer')}
                    className=' group flex-row w-[140px] rounded-[25px] justify-center 
                    py-[5px] gap-[20px] hover:rounded-[5px] border-solid bg-red-500 shadow-md duration-[200ms]'>
                    <Text className='text-[15pt] text-white font-bold font-mono'>Home</Text>
                    <Ionicons className='group-hover:animate-custom-bounce top-[1px]' name='arrow-forward' size={22} color={'white'} />
                </Pressable>

                <Pressable
                    onPress={() => router.push('./Drawer/tabs')}
                    className=' group flex-row w-[140px] rounded-[25px] justify-center 
                    py-[5px] gap-[20px] hover:rounded-[5px] border-solid bg-red-500 shadow-md duration-[200ms]'>
                    <Text className='text-[15pt] text-white font-bold font-mono'>Services</Text>
                    <Ionicons className='group-hover:animate-custom-bounce  top-[1px]' name='arrow-forward' size={22} color={'white'} />
                </Pressable>

                <Pressable
                    onPress={() => router.push('./Drawer/tabs/aboutUs')}
                    className=' group flex-row w-[140px] rounded-[25px] justify-center 
                    py-[5px] gap-[20px] hover:rounded-[5px] border-solid bg-red-500 shadow-md duration-[200ms]'>
                    <Text className='text-[15pt] text-white  font-bold font-mono'>about us</Text>
                    <Ionicons className='group-hover:animate-custom-bounce  top-[1px]' name='arrow-forward' size={22} color={'white'} />
                </Pressable>
            </View>
        </View>
    );
}