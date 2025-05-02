import { Stack } from 'expo-router';
import '../../global.css'
export default function LayoutHome() {
    return (
        <Stack
            screenOptions={{

                headerShown: false,
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="index" options={{ animation: 'flip' }} />
            <Stack.Screen name="Drawer" options={{ animation: 'flip' }} />
            <Stack.Screen name="Drawer/tabs" options={{ animation: 'flip' }} />
            <Stack.Screen name="Drawer/tabs/aboutUs" options={{ animation: 'flip' }} />
        </Stack>
    );
}
