import { View, Text, Dimensions } from 'react-native';
import { ButtonDrawer } from '../../../components/atoms/buttonDrawer';


const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

export function HeaderService() {
    return (
        <View className='h-dvh w-full bg-white'>

            {/* header */}

            <View className='w-full   justify-between  rounded-b-lg items-center  flex-row ' >

                {/* area name */}
                <View>
                    <Text className='font-bold text-[19pt] text-black ml-[5px]' style={{
                        fontSize: width <= 800 ? 22 : 26,
                    }} selectable={false}>Area de Serviços</Text>
                </View>

                <View>
                    {/* Button Drawer */}
                    <ButtonDrawer />
                </View>
            </View>
        </View>
    );
}