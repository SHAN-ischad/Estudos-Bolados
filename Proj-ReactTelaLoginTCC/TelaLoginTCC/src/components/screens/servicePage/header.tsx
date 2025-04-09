import { View, Text, Dimensions } from 'react-native';
import { ButtonDrawer } from '../../../components/atoms/buttonDrawer';
import { TechCar } from '../../atoms/logoTechCar';




const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];


export function HeaderService() {
    let TechCarArea
    let topDrawer
    if (Dimensions.get('window').width <= 800) {
        topDrawer = '-28'
        TechCarArea = <TechCar heightImage={95} widhtImage={95} />;
    } else {
        TechCarArea = <TechCar widhtImage={120} heightImage={120} />;
        topDrawer = '-40'

    }
    return (
        <View className=' w-full bg-white'>

            {/* header */}

            <View className='w-full justify-between rounded-b-lg items-center  flex-row ' >

                {/* logo TechCar */}
                {TechCarArea}
                <View style={{
                    top: parseInt(topDrawer),
                }}>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>
            </View>
        </View>
    );
}