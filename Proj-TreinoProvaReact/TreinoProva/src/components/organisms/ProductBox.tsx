import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Image, Text } from 'react-native';

interface ProductBoxProps {
    productName: string;
    productPrice: string;
    productImage: string;
    productDescription: string;
}

export function ProductBox({ productName, productPrice, productImage, productDescription }: ProductBoxProps) {
    return (
        <View className='h-[300px] flex-col bg-gray-300 p-[5px] rounded-[8px] w-[300px]' >
            {/* Image */}
            <View className='h-[150px] w-full'>
                <Image style={{ width: '100%', height: '100%', borderRadius: 8 }}
                    source={require('@/assets/images/Carrinho.png')} />
            </View>
            {/* Text (name, reviews and description) */}
            <View className='h-[150] w-full flex-col justify-center gap-[20px]'>
                <Text className='text-[12pt] font-semibold'>{productName}</Text>

                <Text className='text-[12pt] font-semibold'>{productPrice}</Text>

                <Text className='text-[12pt] font-semibold'>{productDescription}</Text>
            </View>
        </View>
    );
}