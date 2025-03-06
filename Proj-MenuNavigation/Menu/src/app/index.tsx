import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';
import DrawerSceneWrapper from '../components/drawer-scene-wrapper';
export default function Index() {
    return (
        <DrawerSceneWrapper>
            <View style={style.container} >
                <View style={style.header}>
                    <Image source={{ uri: "https://github.com/SHAN-ischad.png" }} style={style.img} />

                    <View style={style.user}>
                        <Text style={style.hi}>Olá</Text>
                        <Text style={style.username}>Iago Vieira Carvalho</Text>
                    </View>
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
    img: {
        height: 60,
        width: 60,
        borderRadius: 12
    },
    user: {
        flex: 1,
        justifyContent: 'center'
    },
    hi: {
        fontSize: 14,
    },
    username: {
        fontSize: 14,
        fontWeight: '700'
    }
})