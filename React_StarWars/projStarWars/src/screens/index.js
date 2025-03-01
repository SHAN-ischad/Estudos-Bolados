import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native'
import { CunstomText, Logo } from '../components'
export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <CunstomText >StarWars --Wiki</CunstomText>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
