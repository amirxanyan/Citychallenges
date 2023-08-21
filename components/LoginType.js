import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'

const LoginType = () => {
    const navigation = useNavigation();

    const handleLoginType = (LoginType) => {
        console.log(`Selected LoginType: ${LoginType}`);
    };

    return (
        <ImageBackground source={require('../assets/images/fone.png')} style={styles.backgroundImage} >
            <Image
                source={require('../assets/images/lang.png')}
                style={styles.imageOverlay}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn} >


                <Text style={styles.buttonText}>Physical person</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleLoginType('legalPerson')} style={styles.btn}>

                    <Text style={styles.buttonText}>Legal Person</Text>
                



            </TouchableOpacity>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },



    btn: {
        backgroundColor: '#a5edfa',
        marginTop: 20,
        marginHorizontal: 16,
        alignItems: 'center',
        borderRadius: 30,
        elevation: 1,
        padding: 25,
    }
    ,


    buttonText: {
        color: 'black',

        fontSize: 18,

    },


});

export default LoginType;
