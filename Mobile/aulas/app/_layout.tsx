import "../global.css"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerShown: false
      }} >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: "Home",
            drawerIcon: () =>
              <Ionicons color={'gray'} name='home' size={20} />,
            title: 'Bem vindo'
          }} />

        <Drawer.Screen
          name='sobre'
          options={{
            drawerLabel: "Sobre",
            drawerIcon: () =>
              <Ionicons color={'gray'} name='book' size={20} />,
            title: 'Sobre nós'
          }} />

        <Drawer.Screen
          name='contador'
          options={{
            drawerLabel: "contador",
            drawerIcon: () =>
              <Ionicons color={'gray'} name='radio' size={20} />,
            title: 'Sobre nós'
          }} />

      </Drawer>
    </GestureHandlerRootView>
  );
}
