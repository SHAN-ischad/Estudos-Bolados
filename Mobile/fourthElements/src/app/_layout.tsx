import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import "..//types/global.css"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{
                headerShown: false,
                drawerActiveTintColor: 'purple'
            }} >
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home',
                        drawerIcon: () => <Ionicons name='earth' size={20} color={'gray'} />
                    }} />

                <Drawer.Screen
                    name='terra'
                    options={{
                        drawerLabel: 'terra',
                        title: 'Home',
                        drawerIcon: () => <Ionicons name='leaf' size={20} color={'green'} />

                    }} />

                <Drawer.Screen
                    name='agua'
                    options={{
                        drawerLabel: 'agua',
                        title: 'Home',
                        drawerIcon: () => <Ionicons name='water-outline' size={20} color={'blue'} />
                    }} />

                <Drawer.Screen
                    name='ar'
                    options={{
                        drawerLabel: 'ar',
                        title: 'Home',
                        drawerIcon: () => <Ionicons name='rainy' size={20} color={"gray"} />
                    }} />

                <Drawer.Screen
                    name='fogo'
                    options={{
                        drawerLabel: 'fogo',
                        title: 'Home',
                        drawerIcon: () => <Ionicons name='flame-outline' size={20} color={"red"} />
                    }} />




            </Drawer>
        </GestureHandlerRootView>
    );
}
