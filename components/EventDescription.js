import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import LocationSVG from '../assets/images/eventsImages/carbon_location.svg';
import TimeSVG from '../assets/images/eventsImages/carbon_time.svg';
import GiftSVG from '../assets/images/eventsImages/gift.svg';
import CircleSVG from '../assets/images/eventsImages/btn1.svg';
import Gift2SVG from '../assets/images/eventsImages/gift2.svg';
import DoneSVG from '../assets/images/eventsImages/done.svg';
import DramSVG from '../assets/images/eventsImages/dram.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function EventDescription() {
  return (
    <SafeAreaView>
      <Image style={{ width: '100%', height: 333 }}
        source={require('../assets/images/advenuresImages/aleksanrovski.png')}
      />
      <View style={{ backgroundColor: '#FFFFFF', width: '100%', height: "100%", marginTop: -70, borderTopStartRadius: 30, borderTopEndRadius: 30, paddingVertical: 30, paddingHorizontal: 20 }}>
        <View style={{ maxWidth: "75%", }}>

          <Text style={{ fontWeight: '700', fontSize: 24, fontFamily: 'Roboto-regular',color: "#000", marginBottom: 10 }} >
            It’s time to eat more than your friend can
          </Text>
          <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
            <LocationSVG />
            <Text>
              Abovyan 218/1, Gyumri, Armenia
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:10 }}>
            <TimeSVG />
            <Text>
              17:30
            </Text>
            <GiftSVG />
            <Text>
              120 points
            </Text>
            <CircleSVG />
            <Text>
              Easy
            </Text>
          </View>


          <Gift2SVG />

          <DoneSVG />

        </View>
        <Text style={{ color: '#000', fontWeight: '700', fontSize:20 }}>
          Description
        </Text>
        <Text>
          Alexandrovsky, is a place where history and its mood, alcoholic discoveries, gastronomy with special cuisine and dishes are connected.
          You should visit Alexandrovsky and try to eat more burgers than your friend in 30 minutes.
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' , alignItems: 'center', marginTop: 60}}>

          <View style={{flexDirection: 'row'}}>
            <DramSVG />
            <Text>
              10.000
            </Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#0165FF', borderRadius: 20, alignItems: 'center', paddingHorizontal: 70, paddingVertical: 12 }}>
            <Text style={{ color: '#000' }}>
              Book now
            </Text>
          </TouchableOpacity>
        </View>




      </View>

    </SafeAreaView>

  )
}