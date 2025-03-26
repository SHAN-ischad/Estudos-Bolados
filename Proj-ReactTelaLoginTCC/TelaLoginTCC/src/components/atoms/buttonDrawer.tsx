import { View } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';

export function ButtonDrawer() {
    return (
        <View className='w-fit hover:bg-blue-400 p-[2px] rounded-s-md'>
            <DrawerToggleButton />
        </View>
    );
}