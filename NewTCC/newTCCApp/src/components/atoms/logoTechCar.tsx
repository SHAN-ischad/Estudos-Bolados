import { View, Image } from 'react-native';

interface Scale {
    widht: number,
    height: number,
    marginBottom?: number,
}

export function TechCar({ widht, height, marginBottom }: Scale) {
    return (
        <>
            <Image source={require("@/assets/images/Techcar.png")}
                className='max-sm:w-[50px] max-sm:h-[50px] max-md:h-[100px] max-md:w-[100px]'
                style={{
                    width: widht,
                    height: height,
                    marginBottom: marginBottom
                }} />
        </>
    );
}