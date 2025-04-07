import { View } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
export function DrawerButton() {
    return (
        <View className='h-fit w-fit hover:bg-blue-400 rounded-s-md duration-200 
        hover:translate-x-[2px] active:translate-y-[3px] ' >
            <DrawerToggleButton />
        </View>
    );
}