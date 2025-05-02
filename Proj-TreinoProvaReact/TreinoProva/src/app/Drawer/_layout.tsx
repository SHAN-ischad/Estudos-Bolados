import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer >
                <Drawer.Screen
                    name='index'
                    options={{
                        headerShown: false,
                        drawerIcon: () => <Ionicons name='home' size={22} color={'black'} />,

                    }} />
                <Drawer.Screen
                    name='tabs'
                    options={{
                        headerShown: false,
                        drawerIcon: () => <Ionicons name='add' size={22} color={'black'} />,
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}
