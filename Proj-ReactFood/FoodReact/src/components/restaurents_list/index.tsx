import { View } from 'react-native';
import { useState, useEffect } from 'react'
import { RestaurantItem } from './item';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}


export function RestaurentsList() {
    const [restaurents, setRestaurents] = useState<RestaurantsProps[]>([]);
    useEffect(() => {
        async function getFoods() {
            const reponse = await fetch('http://192.168.100.7:3000/restaurants');
            const data = await reponse.json()
            setRestaurents(data)
        }
        getFoods()
    }, [])

    return (
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4' >
            {restaurents.map(item => (
                <RestaurantItem item={item} key={item.id} />
            ))}
        </View>
    );
}