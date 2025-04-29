import { View, Image } from 'react-native';
import { HeaderHome } from '@/src/components/screens/homePage/headerHome';
import { useEffect, useState } from 'react';
import { BodyPage } from '@/src/components/screens/homePage/body';
export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {

        return (
            <View className='h-full w-full bg-white justify-center items-center'>
                <Image style={{
                    height: 200,
                    width: 200,
                }} source={require('../../../assets/images/Techcar.png')} /></View>)
    }

    return (
        <View className='flex-1' >
            {/* Header */}
            <View>
                <HeaderHome />
            </View>

            {/* Body */}
            <View>
                <BodyPage />
            </View>
        </View>
    );
}