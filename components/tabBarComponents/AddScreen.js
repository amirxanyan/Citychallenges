import React from 'react';
import {  Text, View, Image } from 'react-native';
import AddFotoSVG from '../../assets/svgs/addFoto.svg';


function AddScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <AddFotoSVG  width={124} height={124} />
          
           
        </View>
    );
}

export default AddScreen