import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonDrawerFile } from '../components/atoms/buttonDrawer';
export default function Terra() {
    return (
        <View className='w-full h-full flex-row-reverse' >
            <View className='w-fit items-end'>
                <ButtonDrawerFile />
            </View>
            <View className='h-full w-full justify-center items-center'>
                <Ionicons name='leaf' size={100} color={'green'} />
                <Text className='font-bold text-[15pt]'>Terra</Text>
            </View>
        </View>
    );
}