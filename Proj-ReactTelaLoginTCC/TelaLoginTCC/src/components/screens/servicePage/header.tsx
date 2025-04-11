import { View, Text, Dimensions } from 'react-native';
import { ButtonDrawer } from '../../../components/atoms/buttonDrawer';
import { TechCar } from '../../atoms/logoTechCar';


const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

export function HeaderService() {
    return (
        <View className=' w-full bg-white'>

            {/* header */}

            <View className='w-full justify-between  rounded-b-lg items-center  flex-row ' >

                {/* logo TechCar */}
                <View className='top-[-10px] right-[5px]'>
                    <TechCar height={109} widht={109} marginBottom={0} />
                </View>
                <View className='top-[-38px]'>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>
            </View>
        </View>
    );
}