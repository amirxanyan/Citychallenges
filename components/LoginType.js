import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginType = () => {
    const navigation = useNavigation();

    const handleLoginType = (LoginType) => {
        console.log(`Selected LoginType: ${LoginType}`);
    };

    return (
        <ImageBackground source={require('../assets/images/fone.png')} style={styles.backgroundImage} >
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/lang.png')}
                    style={styles.imageOverlay}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.langstyle}>

                        <Text style={styles.buttonText}>Physical person</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleLoginType('legalPerson')}>
                    <View style={styles.langstyle}>

                        <Text style={styles.buttonText}>Legal Person</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    langstyle: {
        backgroundColor: '#a5edfa',
        flexDirection: "row",
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.02,
        width: 340,
        height: 80,
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 30,
        elevation: 10,


        touchable: {
            overflow: 'hidden',
        },
        touchablePressed: {
            transform: [{ scale: 2.5 }],
        },

    },
    flags: {
        marginLeft: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 15,
    },


});

export default LoginType;
