import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {Ionicons} from '@expo/vector-icons'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'inicio',
            title: 'Bem-Vindo',
            drawerIcon: () => <Ionicons name="moon" size={17} color="black" />,
          }}
        />

          <Drawer.Screen
          name="Primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Componente 1',
            title: '1° Componente',
            drawerIcon: () => <Ionicons name="alarm" size={17} color="black" />,
          }}
        />

          <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador ',
          }}
        />
        
          <Drawer.Screen
          name="propriedades" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Propriedades',
            title: 'Propriedades ',
            drawerIcon: () => <Ionicons name="construct" size={17} color="black" />,

          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}
