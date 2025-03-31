
import { Pressable, View, Text, TextInput, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';


export function ContentPage() {
    const [hover, setHover] = useState(false);
    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

    return (
        <View className='w-full flex-row gap-[4%] items-center justify-center' style={{
            flexDirection: width <= 800 ? 'column' : 'row',
            justifyContent: width <= 800 ? 'center' : 'center',
            alignItems: width <= 800 ? 'center' : 'center',
            gap: width <= 800 ? 10 : 15,
            borderRadius: 10,
        }} >
            <Pressable className='shadow-md w-[180px] active:scale-[1.05] min-h-[100px] rounded-lg p-[20px]  items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                <Text className='font-bold text-[12pt] ' selectable={false}>Criar </Text>
                <Ionicons name='create' size={26} />
            </Pressable>

            <Pressable className='shadow-md w-[180px] min-h-[100px] active:scale-[1.05] rounded-lg p-[20px]  items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                <Text className='font-bold text-[12pt]' selectable={false}>Deletar </Text>
                <Ionicons name='trash-outline' size={26} />
            </Pressable>
            <Pressable className='shadow-md w-[180px] min-h-[100px] rounded-lg p-[20px]  active:scale-[1.05] items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                <Text className='font-bold text-[12pt]' selectable={false}>Configurar </Text>
                <Ionicons name='construct-outline' size={26} />
            </Pressable>
        </View>
    );
}