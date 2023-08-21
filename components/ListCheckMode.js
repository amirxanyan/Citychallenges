import {Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ListCheckMode({title}) {
    return (
        
            <TouchableOpacity style={{                
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 20,
                marginVertical: 10,
                height: 38,
                borderRadius: 15,
                borderColor: '#2787CB',
                borderWidth: 2,                
                flexDirection: 'row'
            }}>
                <Text style={{
                     fontWeight: '600',
                     fontSize: 16,
                     fontFamily: 'Roboto-Regular',
                     color: '#000',
                     paddingHorizontal: 32,
                     paddingVertical: 8


                }}>
                    {title}
                </Text>

            </TouchableOpacity>
    
    )
}