
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import PersonSvg from '../../assets/svgs/person.svg'
import SearchSVG from '../../assets/svgs/ion_search-outline.svg'

import CustomSwitch from '../CustomSwitch';

import { groupAdventures, personalAdventures } from '../../data/listCheckModeData';


import Adventures from '../AdventuresList';

function HomeScreenFilter() {
    const [selectTab, setSelectTab] = useState(1);

    const onSelectSwitch = (value) => {
        setSelectTab(value);
    }

    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                    <PersonSvg width={60} height={60} />
                    <SearchSVG width={30} height={30} />
                </View>
                <Text style={{ fontWeight: "400", fontSize: 36, fontFamily: 'Chewy-Regular', color: '#2D076A', marginTop: 10 }}>
                    Get ready for
                    new Adventures!
                </Text>



                <CustomSwitch
                    selectionMode={1}
                    option1='Personal'
                    option2='Group'
                    onSelectSwitch={onSelectSwitch}
                />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {selectTab == 1 && personalAdventures.map(item => (<Adventures title={item.title} key={item.id}  poster={item.poster}/>))}
                    {selectTab == 2 && groupAdventures.map(item => (<Adventures title={item.title} key={item.id}  poster={item.poster}/>))}
                </View>


            </View>
        </ScrollView>
    );
}

export default HomeScreenFilter