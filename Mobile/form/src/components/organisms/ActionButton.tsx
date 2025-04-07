import { Pressable, View } from 'react-native';

interface Props {
    name: String
    label: String
    hover: 'bg-black | bg-white'
    size: '50px' | "200px"
}

export function ActionButton({ name, label, hover, size }: Props) {

    return (
        <View className={`h-${size} w-[100px]  flex-col items-center justify-center`} >
            <Pressable className={`hover:${hover} font-semibold `}>
                {name}
                <View>{label}</View>

            </Pressable>
        </View>
    );
}