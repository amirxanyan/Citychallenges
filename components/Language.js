
import { Image, Text, View, ImageBackground, StyleSheet } from "react-native";

export default function Language() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/fone.png')} resizeMode="cover" style={styles.image}>
        <Image style={styles.tinyLogo} source={require('../assets/images/lang.png')} />

        <View style={styles.langs}>
          
          <Text style={styles.languages}>Englih</Text>
        </View>
        <View style={styles.langs}>
          
          <Text style={styles.languages} >Armenian</Text>
        </View>
        <View style={styles.langs}>
          
          <Text style={styles.languages}>Russian</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  langs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderColor: '#DADADA',
    borderRadius: 10,

  },
  languages: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: 18,
  }
});