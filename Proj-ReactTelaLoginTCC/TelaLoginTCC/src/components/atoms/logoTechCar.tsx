import { View, Image } from 'react-native';

interface Scale {
    widhtImage: number,
    heightImage: number,
    marginBottom?: number,
}

export function TechCar({ widhtImage, heightImage, marginBottom }: Scale) {
    return (
        <View >
            <Image source={require("@/assets/images/Techcar.png")} style={{
                width: widhtImage,
                height: heightImage,
                marginBottom: marginBottom
            }} />
        </View>
    );
}