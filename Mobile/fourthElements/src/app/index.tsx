import { View, Text, Image } from 'react-native';
import { ButtonDrawerFile } from '../components/atoms/buttonDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
    return (
        <View className='w-full h-full  flex-row-reverse bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ...'>
            <View className='w-fit  items-end'>
                <ButtonDrawerFile />
            </View>

            <View className='h-full w-full items-center justify-center'>
                <Ionicons name='earth' size={100} />
                <Text className='font-bold text-[15pt]'>Exercício dos quatro elementos</Text>
                <Image className='mt-[2%] rounded-[5px]' source={require('../../assets/images/Avatar.gif')} />
            </View>
        </View>
    );
}