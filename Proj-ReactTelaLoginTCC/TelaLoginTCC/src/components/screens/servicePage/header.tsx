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
                <TechCar height={130} widht={130} marginBottom={0} />
                <View className='top-[-45px]'>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>
            </View>
        </View>
    );
}