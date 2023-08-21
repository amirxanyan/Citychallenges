import { Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LocationSVG from '../assets/images/eventsImages/carbon_location.svg';
import TimeSVG from '../assets/images/eventsImages/carbon_time.svg';

export default function EventsList({ poster, title, location, time, }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('EventDescription')}
        style={{
            padding: 15,
            marginBottom: 10,
            borderRadius: 15,
            backgroundColor: '#BCD1F2',
            flexDirection: 'row', }}>
            <Image
                source={poster}
                style={{width: 80, height: 80, marginRight: 10}}
            />
            <View style={{flex: 1, justifyContent:'space-between'}}>

                <Text style={{fontWeight: '800', color: '#000'  }} >
                    {title}
                </Text>
                <View  style={{flexDirection:'row', alignItems: 'center'}}>
                    <LocationSVG />
                    <Text style={{color:'#000', marginLeft: 6}}>
                        {location}
                    </Text>
                </View>
                <View style={{flexDirection:'row' , alignItems: 'center'}}>
                    <TimeSVG />
                    <Text style={{color:'#000',  marginLeft: 6}}>
                        {time}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>

    )
}