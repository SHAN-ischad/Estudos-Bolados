import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Pressable, View, Text } from 'react-native';

export default function DrawerHome() {

    const router = useRouter()

    return (
        <View className='flex-1' >

            {/* Header */}
            <View className='w-full justify-between flex-row '>
                <Pressable
                    onPress={() => router.back()}
                    className='shadow-md bg-blue-400 rounded-md ml-[10px] top-[10px] gap-[2px] w-fit h-fit p-[5px] group flex-row-reverse '>
                    <Text className='font-sans text-[13pt] text-white font-medium'>Voltar</Text>
                    <Ionicons className='top-[5px] group-hover:animate-custom-bounce' name='arrow-back' size={15} color={"white"} />
                </Pressable>
                <DrawerToggleButton />

            </View>
            <View className='w-full h-[500px] '>

            </View>
        </View>
    );
}