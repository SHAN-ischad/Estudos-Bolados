import { View, Image } from 'react-native';

interface Scale {
    widht: number,
    height: number,
    marginBottom?: number,
}

export function TechCar({ widht, height, marginBottom }: Scale) {
    return (
        <View >
            <Image source={require("@/assets/images/Techcar.png")} style={{
                width: widht,
                height: height,
                marginBottom: marginBottom
            }} />
        </View>
    );
}