import { Pressable, View, Text, TextInput } from 'react-native';


export function ContentPage() {
    return (
        <View className='w-full' >
            <TextInput placeholder='Digite um nome ao serviço' className='p-[15px] rounded-[5px] w-[20%] shadow-md border-[none] ' />
            <Pressable className='mt-[20px] py-[12px] rounded-[5px] hover:bg-green-400 hover:mt-[1%] duration-200 items-center shadow-md w-[10%]'>
                <Text selectable={false}>Criar</Text>
            </Pressable>
        </View>
    );
}