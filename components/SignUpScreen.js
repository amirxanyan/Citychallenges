import axios from 'axios';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import IcSignUpIllustration from '../assets/svgs/ic_sign_up_illustration.svg';
import GoogleSVG from '../assets/svgs/google.svg';
import FacebookSVG from '../assets/svgs/facebook.svg';
import Linkedin from '../assets/svgs/linkedin.svg';


export default function SignUpScreen() {

    const [NameSurname, setNameSurname] = useState('');
    const [Mail, setMail] = useState('');
    const [Password, setPassword] = useState('');

    return (
        <View style={styles.Background}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <IcSignUpIllustration width={436} height={356} top={59} left={-3} />
                <Text style={styles.SignUp}>Sign Up</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput
                        style={styles.NameSurnameInput}
                        placeholder="Name,Surname"
                        onChangeText={(text) => setNameSurname(text)}
                        value={NameSurname}
                    />
                    <TextInput
                        style={styles.MailInput}
                        placeholder="Mail"
                        onChangeText={(text) => setMail(text)}
                        value={Mail}
                    />
                    <TextInput
                        style={styles.PasswordInput}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={Password}
                    />
                </View>
                <TouchableOpacity style={{ alignItems: 'center' }} >
                    <View style={styles.SingeUpButton}>
                        <Text style={styles.SingeUpButtonuText}>Sing Up</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.or}>Or</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <GoogleSVG height={30} width={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 26, marginRight: 26 }}>
                        <FacebookSVG height={30} width={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Linkedin height={30} width={30} />
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    SignUp: {
        flex: 1,
        width: 264,
        height: 70,
        top: 38,
        left: 133,
        fontSize: 50,
        lineHeight: 70,
        letterSpacing: 0.20000000298023224,
        color: '#000000',
        fontFamily: 'LilitaOne-Regular'
    },
    NameSurnameInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        marginTop: 35,

    },
    MailInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    PasswordInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 340,
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    Background: {
        flex: 1,
        width: 430,
        height: 932,
        background: '#FFFFFF',
    },
    SingeUpButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0165FF',
        width: 350,
        height: 50,
        borderRadius: 15,
        marginTop: 20,
    },
    SingeUpButtonuText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    or: {
        margin: 20,
        color: '#000',
        fontWeight: '400',
        fontSize: 18,
    }
})