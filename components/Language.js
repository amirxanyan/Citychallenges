import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Language = () => {
    const navigation = useNavigation();
    const handleLanguageSelection = (language) => {
        console.log(`Selected language: ${language}`);
    };

    return (
        <ImageBackground source={require('../assets/images/fone.png')} style={styles.backgroundImage} >
            <View style={styles.container}>
                <Image source={require('../assets/images/lang.png')}  />
                <TouchableOpacity onPress={() => navigation.navigate('LoginType')}>
                    <View style={styles.langstyle}>
                    <Image style={styles.flags} source={require('../assets/images/eng.png')} />
                        <Text style={styles.buttonText}>English</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleLanguageSelection('Armenian')}>
                    <View style={styles.langstyle}>
                        <Image style={styles.flags} source={require('../assets/images/arm.png')} />
                        <Text style={styles.buttonText}>Հայերեն</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleLanguageSelection('Russian')}>
                    <View style={styles.langstyle}>
                    <Image style={styles.flags} source={require('../assets/images/rus.png')} />
                        <Text style={styles.buttonText}>Русский</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,       
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    langstyle: {
        backgroundColor: '#69d7f0',
        flexDirection: "row",       
        width: 340,
        height: 80,
        marginTop: 20,        
        alignItems: 'center',
        borderRadius: 30,
    },
    flags:{
        marginLeft: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 15,
    },

 
});

export default Language;
