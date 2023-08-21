import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import PersonSvg from '../../assets/svgs/person.svg'
import SearchSVG from '../../assets/svgs/ion_search-outline.svg'
import FilterSVG from '../../assets/svgs/mi_filter.svg'
import CustomSwitch from '../CustomSwitch';
import ListCheckMode from '../ListCheckMode';
import { personal, group } from '../../data/listCheckModeData';

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
                <View style={{ flexDirection: 'row', marginTop: 22, justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "400", fontSize: 22, fontFamily: 'Chewy-Regular', color: '#2D076A', }} >
                        Challenges
                    </Text>
                    <TouchableOpacity>
                        <FilterSVG />
                    </TouchableOpacity>
                </View>


                <CustomSwitch
                    selectionMode={1}
                    option1='Personal'
                    option2='Group'
                    onSelectSwitch={onSelectSwitch}
                />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {selectTab == 1 && personal.map(item => (<ListCheckMode title={item.title} key={item.id} />))}
                    {selectTab == 2 && group.map(item => (<ListCheckMode title={item.title} key={item.id} />))}
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 63
                }}>
                    <TouchableOpacity style={{ backgroundColor: '#BADDFB', borderRadius: 10, alignItems: 'center', height: 38, width: 98, justifyContent: 'center', }}>
                        <Text style={{ fontFamily: 'Roboto-Regular', fontWeight: "bold", fontSize: 16, color: '#000', }}>
                            Search
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

export default HomeScreenFilter