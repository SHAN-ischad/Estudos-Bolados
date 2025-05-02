import { TouchableOpacity, Text } from 'react-native';

interface ActionButtonProps {
    text: String,
    width: String | 'w-200px',
    paddind: String,
    color: 'bg-black' | 'bg-red-500' | 'bg-blue-500' | 'bg-green-500',
    // action: () => void,
}
// action
export function ActionButton({ text, width, paddind, color, }: ActionButtonProps) {
    return (
        <>
            <TouchableOpacity className={`w-[${width}] active:animate-pulse rounded-[8px] items-center p-[${paddind}] ${color} duration-[300ms] group `}>

                <Text className='text-white group-hover:animate-pulse'>{text}</Text>
            </TouchableOpacity>
        </>
    );
}