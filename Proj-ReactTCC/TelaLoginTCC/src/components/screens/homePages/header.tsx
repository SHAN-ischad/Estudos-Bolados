import { View } from 'react-native';
import { TechCar } from '../../atoms/logoTechCar';
import { ButtonDrawer } from '../../atoms/buttonDrawer';



export function HomeHeader() {
    return (
        <>
            <View className='w-full flex-row justify-between items-center'>
                {/* logo TechCar */}
                <View className='top-[-10px] right-[5px]'>
                    <TechCar height={100} widht={100} marginBottom={0} />
                </View>
                <View className='top-[-32px]'>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>


            </View>
        </>
    );
}