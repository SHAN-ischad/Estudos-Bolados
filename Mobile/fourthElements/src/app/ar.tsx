import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonDrawerFile } from '../components/atoms/buttonDrawer';
export default function Ar() {
    return (
        <View className='h-full w-full flex-row-reverse' >
            <View className='w-fit items-end'>
                <ButtonDrawerFile />
            </View>

            <View className='h-full w-full justify-center items-center'>
                <Ionicons name='rainy' size={100} color={'gray'} />
                <Text className='font-bold text-[15pt]'>Ar</Text>
            </View>
        </View>
    );
}