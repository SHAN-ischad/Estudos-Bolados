import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
    return (
        <View className='w-full flex-row border-2 items-center rounded-2xl h-14 bg-transparent'>
            <Feather name='search' size={24} color="#64748b" className='ml-2' />
            <TextInput placeholder='Procure por sua comida' />
        </View>
    );
}