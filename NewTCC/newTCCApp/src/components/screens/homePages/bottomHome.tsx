import { ScrollView, Text, View } from 'react-native';
import { GlobalAreaPressable } from '../../organisms/globalAreaPressable';
export function BottomHome() {
    return (
        <View className='h-fit bottom-[280px] mt-[5%] max-[400px]:mt-[8%] w-full items-center' >
            <Text className='text-[30px] text-center'>Ultimos Serviços</Text>

            {/*Latest Services  */}
            <ScrollView className='mt-[15px] w-full '
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center'
                }}
                keyboardShouldPersistTaps='handled'>

                <View className=' flex-col gap-[20px]  max-sm:w-[100%]   '>
                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />

                    <GlobalAreaPressable nameCar='Lanborguini' openingDate='29/10/25' nameClient='Victor Fritz' serviceStage='limpeza' image='aaa' />
                </View>
            </ScrollView>

        </View>
    );
}