import { View } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
export function ButtonDrawerFile() {
    return (
        <View className='w-fit h-fit p-[2px] rounded-s-md hover:bg-gray-300 duration-200 ease-in-out'>
            <DrawerToggleButton />
        </View>
    );
}