import { View } from 'react-native';
import { GlobalHeader } from '@/src/components/organisms/header';
import { BodyHomeClient } from '@/src/components/screens/homeClientPages/bodyHomeClient';
import { BottomHomeClient } from '@/src/components/screens/homeClientPages/bottomHomeClient';


export default function HomeClient() {
    return (

        <View className='flex-1 overflow-x-hidden' >
            <GlobalHeader />

            <BodyHomeClient />

            <View className='max-[400px]:mt-[5%]'>

                <BottomHomeClient />
            </View>
        </View>
    );
}