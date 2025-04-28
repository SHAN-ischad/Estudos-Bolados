// import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, Text } from 'react-native';

interface ButtonEnvProps {
    action: () => void,
    textButton: string,

}
export function ButtonEnv({ action, textButton }: ButtonEnvProps) {
    return (
        <View>
            <Pressable onPress={action} className='items-center  w-fit p-[10px] px-[50px]  bg-blue-600  duration-[0.5s] rounded-[10px]   active:scale-[1.0]  hover:translate-x-[9px] shadow-md'>
                <Text className='text-[12pt] font-bold text-white'>{textButton}</Text>
            </Pressable>
        </View>
    );
}

