import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Adventures({ title, poster }) {
    return (

        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>


            <Image
                source={poster}
                style={{ marginRight: 10 }}
            />


        </TouchableOpacity>

    )
}