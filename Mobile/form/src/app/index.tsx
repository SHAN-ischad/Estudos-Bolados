import { View } from 'react-native';
import { DrawerButton } from '../components/atoms/DrawerButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ActionButton } from '../components/organisms/ActionButton';
export default function Index() {
    return (
        <View className='h-dvh'>
            {/* Header */}
            <View className='w-full flex-row-reverse mb-[20%]'>
                <DrawerButton />
            </View>

            {/* content */}
            <View className='w-full items-center'>
                <Ionicons name='receipt' size={70} color={'blue'} />
                <ActionButton label={'vai la'} name={'Criar'} size='200px' hover='bg-black | bg-white' />
            </View>
        </View>
    );
}