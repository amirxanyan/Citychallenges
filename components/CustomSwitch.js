import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };
    return (
        <View
            style={{
                height: 44,
                width: '100%',
                marginTop: 50, 
                
                borderRadius: 10,
                borderColor: '#AD40AF',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: getSelectionMode == 1 ? '#EB001B' : '#005693', 
                    marginHorizontal:2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: getSelectionMode == 1 ? '#EB001B' : '#005693',
                        fontSize: 18,
                        fontWeight: '600',
                        fontFamily: 'Roboto-Medium',
                    }}>
                    {option1}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(2)}
                style={{
                    flex: 1,                    
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: getSelectionMode == 2 ? '#EB001B' : '#005693', 
                }}>
                <Text
                    style={{
                        color: getSelectionMode == 2 ? '#EB001B' : '#005693',  
                        fontSize: 18,
                        fontWeight: '600',
                        fontFamily: 'Roboto-Medium',
                    }}>
                    {option2}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSwitch