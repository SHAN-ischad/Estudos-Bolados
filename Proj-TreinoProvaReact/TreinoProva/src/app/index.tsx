import { Pressable, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


export default function Home() {

    const router = useRouter();
    return (
        <View className='flex-1 '  >
            <Text className='text-[25pt] ml-[5%] mt-[1%] font-mono'>Bem vindo.{'\n'}Escolha para onde irá navegar</Text>

            <View className='w-full gap-[20px] h-[200px] justify-center items-center  mt-[5%]'>
                <Pressable
                    onPress={() => router.push('./Drawer')}
                    className=' group flex-row w-[130px] rounded-md justify-center py-[12px] gap-[20px] hover:rounded-[5px] bg-slate-300 shadow-lg duration-[200ms]'>
                    <Text className='text-[15pt] font-medium'>Home</Text>
                    <Ionicons className='group-hover:animate-custom-bounce top-[3px]' name='arrow-forward' size={22} color={'black'} />
                </Pressable>

                <Pressable className=' group flex-row w-[130px] rounded-md justify-center py-[12px] gap-[20px] hover:rounded-[5px] bg-slate-300 shadow-lg duration-[200ms]'>
                    <Text className='text-[15pt] font-medium'>Services</Text>
                    <Ionicons className='group-hover:animate-custom-bounce  top-[3px]' name='arrow-forward' size={22} color={'black'} />
                </Pressable>

                <Pressable className=' group flex-row w-[130px] rounded-md justify-center py-[12px] gap-[20px] hover:rounded-[5px] bg-slate-300 shadow-lg duration-[200ms]'>
                    <Text className='text-[15pt] font-medium'>about us</Text>
                    <Ionicons className='group-hover:animate-custom-bounce  top-[3px]' name='arrow-forward' size={22} color={'black'} />
                </Pressable>
            </View>
        </View>
    );
}