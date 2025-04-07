import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'green',

        }}>
            <Tabs.Screen
                name="index"
                options={{

                    title: 'Home',
                    tabBarIcon: () => <FontAwesome size={28} name="home" color={'gray'} />,
                    tabBarStyle: { backgroundColor: 'white', },
                }}
            />
            <Tabs.Screen
                name="curso"
                options={{
                    title: 'Curso',
                    tabBarIcon: () => <FontAwesome size={28} name="address-card-o" color={''} />,
                }}
            />

            <Tabs.Screen
                name="sobre"
                options={{
                    title: 'Sobre',
                    tabBarIcon: () => <FontAwesome size={28} name="cog" color={''} />,
                }}
            />
        </Tabs>
    );
}
