import { Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface ButtonLinkProps {
    title: String
    textBottom: String
    width: "100px" | "200px" | "300px" | "400px" | "500px"
    height: "100px" | "200px" | "300px" | "400px" | "500px"
    action: () => void
    backgroundColor?: "bg-slate-200" | "bg-slate-300" | "bg-slate-900"
}

export function ButtonLink({ title, textBottom, width, height, action, backgroundColor }: ButtonLinkProps) {
    return (
        <>
            <Pressable onPress={action} className={` hover: w-[${width}] h-[${height}] rounded-[12px] ${backgroundColor} p-[20px]  `}>
                {/* Título */}
                <View className='w-full flex-col items-center'>

                    <View className='flex-row gap-[5px]'>
                        <Text className='text-[15pt] font-semibold'>{title}</Text>
                        <Ionicons className='top-[4px]' name="chevron-forward" size={20} color="black" />
                    </View>

                    <Text className='text-[12pt] font-normal'>{textBottom}</Text>






                </View>
            </Pressable>
        </>
    );
}