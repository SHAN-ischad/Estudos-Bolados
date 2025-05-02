import { TextInput, View } from 'react-native';



interface InputsProps {
    width: String,
    paddind: String
    text: String
}


export function Inputs({ width, paddind, text }: InputsProps) {
    return (
        <>
            <TextInput className={`w-[${width}] p-[${paddind}] border-[1.5px] rounded-[10px] focus:rounded-[5px] duration-[300ms] placeholder:text-[14pt] placeholder:font-mono`} placeholder={`${text}`} />
        </>
    );
}