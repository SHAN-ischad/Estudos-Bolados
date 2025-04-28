
import { Pressable, View, Text, TextInput, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { styled } from '../../../style/style';

export function ContentPage() {
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return null
    }
    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];

    return (
        <View className='w-full h-[250px] flex-col gap-[4%] items-center justify-center te' style={{
            // flexDirection: width <= 800 ? 'column-reverse' : 'column',
            gap: width <= 800 ? 10 : 15,
            borderRadius: 10,
            marginTop: width <= 800 ? 90 : 0,
        }} >
            {/* Pesquisa */}
            <View className=' gap-[20px]'>
                <TextInput placeholder='Pesquisar' className='mt-[20px] mb-[20px] w-[300px]  p-[10px] border-solid border-[1px] rounded-[10px] focus:rounded-[5px] duration-[600ms] placeholder:text-[12pt]' />
                <Ionicons name='search' size={20} className='absolute left-[90%] top-[30px]' />
            </View>

            {/* botões de ação */}
            <View style={{
                flexDirection: width <= 800 ? 'column' : 'row',
            }} className='flex-row gap-[20px]'>
                <Pressable className='shadow-md w-[180px] min-h-[100px] 
            rounded-lg p-[20px] items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                    <Text style={styled.fonts} className='font-bold text-[12pt]'>Criar </Text>
                    <Ionicons name='create' size={26} />
                </Pressable>

                <Pressable className='shadow-md w-[180px] min-h-[100px] rounded-lg p-[20px] items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                    <Text style={styled.fonts} className='font-bold text-[12pt]'>Deletar </Text>
                    <Ionicons name='trash-outline' size={26} />
                </Pressable>
                <Pressable className='shadow-md w-[180px] min-h-[100px] rounded-lg p-[20px] items-center justify-center hover:bg-blue-200 hover:mt-[0.5%] duration-300 flex-row '>
                    <Text style={styled.fonts} className='font-bold text-[12pt]'>Configurar </Text>
                    <Ionicons name='construct-outline' size={26} />
                </Pressable>
            </View>
        </View>
    );
}