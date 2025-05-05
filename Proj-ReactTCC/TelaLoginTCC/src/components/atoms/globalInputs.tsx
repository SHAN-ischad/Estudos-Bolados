import { TextInput } from 'react-native';


interface GlobalInputsProps {
    placeholder: string;
    value: string,
    backgroundColor: string,
    padding: string,
    borderRadius: string,
    marginTop: string,
    marginLeft: string,
    marginRight: string,
    marginBottom: string,

}


export function GlobalInputs({ placeholder, value, backgroundColor, padding, borderRadius, marginTop, marginLeft, marginRight, marginBottom }: GlobalInputsProps) {

    return (
        <>
            <TextInput placeholder={placeholder} value={value}
                className={`w-full p-[${padding}] rounded-[${borderRadius}] max-sm:w-[300px] border-[1px] duration-[300ms] focus:rounded-[5px] bg-[${backgroundColor}] mt-[${marginTop}] ml-[${marginLeft}] mr-[${marginRight}] mb-[${marginBottom}]`} />

        </>
    );
}