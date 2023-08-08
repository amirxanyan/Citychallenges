import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import Hide from '../assets/images/hidepassword';

const Login = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [imageOverlayPosition, setImageOverlayPosition] = useState(1);

  const handleLogin = () => {
    console.log('Login button pressed');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNameSurnamePress = () => {
    setImageOverlayPosition(-200);
  };

  const handleNameSurnamePressOut = () => {
    setImageOverlayPosition(1);
  };

  return (
    <ImageBackground
      source={require('../assets/images/fone.png')}
      style={styles.backgroundImage} >


      <View style={styles.wrapper}>
        <Image
          source={require('../assets/images/image72.png')}

        />
        <View style={styles.form}>
          <Text style={styles.text}>Log In</Text>

          <TextInput
            style={styles.input}
            placeholder="Name Surname"
            onFocus={handleNameSurnamePress}
            onEndEditing={handleNameSurnamePressOut}
          />

          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
              onFocus={handleNameSurnamePress}
              onEndEditing={handleNameSurnamePressOut}

            />
            <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
              <View style={styles.togglePasswordButton}>
                <Hide style={styles.togglePasswordButtonText} />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback onPress={handleLogin}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </View>

          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.or}>Or</Text>

        <View style={styles.logoVrapper}>
          <Image
            source={require('../assets/images/googleLogo.png')}
            style={styles.logo}
          />

          <Image
            source={require('../assets/images/fbLogo.png')}
            
            style={styles.logo}
          />

          <Image
            source={require('../assets/images/inLogo.png')}
            style={styles.logo}
          />
        </View>
        <View >
          <Text>Don’t have an account?</Text>
          <Text style={{ color: "red" }}> TO DO nav sign up</Text>
        </View>
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
    backgroundColor: '#2196F3',
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