
import { Text, TouchableOpacity, View, ScrollView, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


import PersonSvg from '../../assets/svgs/person.svg'
import SearchSVG from '../../assets/svgs/ion_search-outline.svg'
import FilterSVG from '../../assets/svgs/mi_filter.svg'
import EventsList from '../EventsList';
import { events } from '../../data/listCheckModeData';




function HomeScreenMain() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>

            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                    <PersonSvg width={60} height={60} />
                    <SearchSVG width={30} height={30} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }} >
                        Challenges
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreenFilter')}>
                        <FilterSVG />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderTopWidth: 1,
                        marginTop: 10,
                    }}>

                        <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }}>
                            Today
                        </Text>
                        <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }}>
                            13 Jul
                        </Text>

                    </View>
                    <View>
                        {events.map(item => (<EventsList title={item.title}
                            key={item.id}
                            location={item.location}
                            time={item.time}
                            poster={item.poster}
                        />))}
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderTopWidth: 1,
                        marginTop: 10,
                    }}>

                        <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }}>
                            Tomorrow
                        </Text>
                        <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }}>
                            14 Jul
                        </Text>

                    </View>
                    <View>
                        {events.map(item => (<EventsList 
                                                    title={item.title}
                                                    key={item.id}
                                                    location={item.location}
                                                    time={item.time}
                                                    poster={item.poster}
                        />))}
                    </View>


                </ScrollView>
            </View>

        </SafeAreaView>


    );
}
export default HomeScreenMain