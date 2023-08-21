import React , { useState } from 'react';
import {  Text, TouchableOpacity, View , } from 'react-native';

import PersonSvg from '../../assets/svgs/person.svg'
import SearchSVG from '../../assets/svgs/ion_search-outline.svg'
import CustomSwitch from '../CustomSwitch';

function FavoriteScreen() {
    const [selectTab, setSelectTab] = useState(1);

    const onSelectSwitch = (value) => {
        setSelectTab(value);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                <PersonSvg width={60} height={60} />
                <SearchSVG width={30} height={30} />
            </View>

            <CustomSwitch
                selectionMode={1}
                option1='Personal'
                option2='Group'
                onSelectSwitch={onSelectSwitch}
            />


        </View>
    );
}

export default FavoriteScreen