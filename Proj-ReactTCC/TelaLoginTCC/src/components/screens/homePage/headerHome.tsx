import { View, Text, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { TechCar } from '../../atoms/logoTechCar';
import { ButtonDrawer } from '../../atoms/buttonDrawer';


export function HeaderHome() {



    return (
        <View className='w-full  justify-between flex-row' >
            <View>
                <TechCar widht={106} height={106} marginBottom={0} />

            </View>

            <View className='h-fit'>
                <ButtonDrawer />
            </View>
        </View>
    );
}