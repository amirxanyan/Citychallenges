import React from 'react';
import { ImageBackground, View, StyleSheet, StatusBar, } from "react-native";
import LogoSplashScreen from '../assets/svgs/SplashScreen_icon.svg'


export default function SplashScreen() {
    return (
        <View >
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={require('../assets/images/SplashScreen_fone.png')} resizeMode="cover"
                style={styles.StyleSheetBackgroundImage}>

                <LogoSplashScreen height={300} width={300} />
            </ImageBackground>
        </View>
    )

};
const styles = StyleSheet.create({
    StyleSheetBackgroundImage: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

})