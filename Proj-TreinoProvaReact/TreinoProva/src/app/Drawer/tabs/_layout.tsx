import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60,
                    position: 'absolute',
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderWidth: 1,
                    borderColor: 'gray'
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: () => <Ionicons name="home-outline" size={30} color={'white'} />,

                }}
            />

            <Tabs.Screen
                name="aboutUs"
                options={{
                    tabBarIcon: () => <Ionicons name="document" size={30} color={'white'} />,

                }}
            />
        </Tabs>
    );
}
