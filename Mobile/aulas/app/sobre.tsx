import { View, Text } from 'react-native';
import { DrawerToggleButtonfile } from '@/components/atons/drawerToggleButton';
export default function Sobre() {
    return (

        <View>
            <View className='w-full items-end'>
                <View className='w-fit hover:bg-purple-300 duration-200 rounded-s'>
                    < DrawerToggleButtonfile />
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bem vindo ao nosso site</Text>
            <Text style={{ marginTop: 10 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius praesentium dolore reprehenderit qui doloremque quod fuga voluptatum necessitatibus temporibus accusantium nesciunt, odio, eos veritatis nobis non obcaecati velit suscipit.
            </Text>

        </View >


    );
}