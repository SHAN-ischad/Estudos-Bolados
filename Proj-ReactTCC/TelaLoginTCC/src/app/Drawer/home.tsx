import { View } from 'react-native';
import { HomeHeader } from '../../components/screens/homePages/header';
import { BodyHome } from '../../components/screens/homePages/bodyHome';
import { BottomHome } from '../../components/screens/homePages/bottomHome';

export default function Home() {
    return (
        <View className='flex-1 max-2xl:overflow-x-auto' >
            {/* Header */}
            <View>
                <HomeHeader />
            </View>

            <BodyHome />

            <BottomHome />
        </View>
    );
}