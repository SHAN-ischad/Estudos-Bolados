// import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, Text } from 'react-native';

interface ButtonEnvProps {
    action: () => void,
    textButton: string,

}
export function ButtonEnv({ action, textButton }: ButtonEnvProps) {
    return (
        <View>
            <Pressable onPress={action} className='w-[100%] gap-[5px] p-[15px] px-[25px] flex-row justify-center rounded-[5px] bg-white active:bg-green-400 hover:mb-[2%] hover:translate-x-[8px] duration-200 shadow-md mt-[30px]'>
                <Text className='text-[12pt] font-bold'>{textButton}</Text>
            </Pressable>
        </View>
    );
}

