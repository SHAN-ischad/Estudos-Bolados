import { View, Text, StyleSheet } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import DrawerSceneWrapper from '../components/drawer-scene-wrapper';
export default function Notifications() {
    return (
        <DrawerSceneWrapper>
            <View style={style.container} >
                <View style={style.header}>

                    <Text style={style.username}>Notificações</Text>

                    <DrawerToggleButton />
                </View>

            </View>
        </DrawerSceneWrapper>
    );


}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 32,
        backgroundColor: '#FFFFFF'
    },
    header: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        gap: 7
    },
    username: {
        fontSize: 14,
        fontWeight: '700',
        flex: 1,

    }
})