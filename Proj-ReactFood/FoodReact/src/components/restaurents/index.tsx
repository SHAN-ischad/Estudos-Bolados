import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantItem } from './horizontal';


export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurents() {

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

        <FlatList
            data={restaurents}
            renderItem={({ item }) => <RestaurantItem item={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingRight: 16, paddingLeft: 16 }}
            showsHorizontalScrollIndicator={false} />
    );
}