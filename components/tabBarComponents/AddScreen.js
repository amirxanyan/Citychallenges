import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import AddFotoSVG from '../../assets/svgs/addFoto.svg';




function AddScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.textAddScrin}>Let's add a new challenge!</Text>
            <AddFotoSVG style={styles.iconAddScrin} width={124} height={124} />


        </View>
    );
}
const styles = StyleSheet.create({
    textAddScrin: {
        width: 293,
        height: 94,
        fontFamily: 'Chewy-Regular',
        fontSize: 36,
        fontWeight: '400',
        lineHeight: 47,
        letterSpacing: 2.200000047683716,
        textAlign: 'left',
        color: '#2D076A',
    },
    iconAddScrin: {
        width: 124,
        height: 124,
        top: 28,
        left: 130,
        border: 1,
        borderRadius:100,
        backgroundColor:'#C0C0C0'

}
})

export default AddScreen