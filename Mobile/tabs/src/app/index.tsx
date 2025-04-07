import { View, Text, Pressable } from 'react-native';
import '../../global.css'
export default function Index() {
    return (
        <View className='bg-white h-dvh justify-center items-center'  >
            <View className='h-[50%] w-[50%] shadow-md rounded-[5px] justify-center items-center '>
                <Text>Amo minha família</Text>
                <Pressable className='mt-[10px] py-[10px] w-[20%] shadow-md rounded-[5px] items-center hover:bg-green-300 hover:my-[2%] duration-200'>
                    <Text className='text-[10pt]' selectable={false}>Aperte para ficar Maneiro</Text>
                </Pressable>
            </View>
        </View>
    );
}