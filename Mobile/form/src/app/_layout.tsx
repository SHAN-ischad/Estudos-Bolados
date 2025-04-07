import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import '../styles/global.css'

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer >
                <Drawer.Screen
                    name='index'
                    options={{
                        headerShown: false,
                        title: 'home',
                        drawerIcon: () => <Ionicons name='home-outline' size={24} color={'blue'} />
                    }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}
