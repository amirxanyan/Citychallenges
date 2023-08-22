import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Hide from '../assets/images/hidepassword';
import LoginSVG from '../assets/images/loginSVG.svg';
import GoogleSVG from '../assets/svgs/google.svg';
import FacebookSVG from '../assets/svgs/facebook.svg';
import Linkedin from '../assets/svgs/linkedin.svg';
import React, { useState } from 'react';
import axios from 'axios';



function Login ({navigation}) {
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const [imageOverlayPosition, setImageOverlayPosition] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Создаем объект данных для отправки на сервер
    const userData = {
      email: email,
      password: password,
    };

    // Отправляем POST-запрос на сервер
    axios.post('http://localhost:4000/users/login', userData)
      .then((response) => {
        // Обработка успешного ответа от сервера
        if (response.status === 200) {
          // Действия после успешной регистрации
          navigation.navigate('MyTabs');
        }
      })
      .catch((error) => {
        // Обработка ошибок при запросе
        console.error('sxal login', error);
      })}


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleNameSurnamePress = () => {
    setImageOverlayPosition(-200);
  };
  const handleNameSurnamePressOut = () => {
    setImageOverlayPosition(1);
  };
  const signUpScreen = ()=>{
    navigation.navigate('SignUpScreen')
  }

  return (
    <ImageBackground
      source={require('../assets/images/fone.png')}
      style={styles.backgroundImage} >

      <View style={styles.wrapper}>
        <View style={styles.form}>
          <LoginSVG height={300} width={300} />
          
          <Text style={{ fontFamily: 'LilitaOne-Regular', fontSize: 50, fontWeight: '400', color: '#333' }}>
            
            Log In
            
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"   
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <View style={styles.togglePasswordButton}>
                <Hide style={styles.togglePasswordButtonText} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => { }} style={{ textAlign: 'right', paddingLeft: 200, marginBottom: 15 }}>
              <Text style={{ color: '#0165FF', fontWeight: 'bold' }}>
                Forgot Verification code
              </Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.or}>Or</Text>
      </View>
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
      
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Text style={{ color: '#000', fontWeight: 400, fontSize: 14 }}>
          Don’t have an account?
        </Text>
        <TouchableOpacity style={{ marginLeft: 10 }} >
          <Text onPress={signUpScreen} style={{ color: '#0165FF', fontWeight: 700, fontSize: 14 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  or: {
    margin: 20,
    color: '#000',
    fontWeight: '400',
    fontSize: 18,

  },
  logoVrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },

  logo: {
    justifyContent: "space-around",
    margin: 20,
  },
  loginLeyer: {
    backgroundColor: "#DADADA",
    opacity: 0.5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },

  form: {
    justifyContent: "center",
    alignItems: "center",

  },

  text: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: '800',
    lineHeight: 100,
    letterSpacing: 0.2,
    color: 'black',
  },
  imageOverlay: {
    position: 'absolute',
    top: 1,
    width: 400,
    height: 330,
    resizeMode: 'contain',
  },
  input: {
    width: 340,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  togglePasswordButton: {
    padding: 10,
    marginLeft: 8,
  },
  togglePasswordButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#0165FF',
    width: 350,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;