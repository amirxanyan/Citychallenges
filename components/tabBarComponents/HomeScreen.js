import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import HomeScreenFilter from './HomeScreenFilter'
import HomeScreenMain from './HomeScreenMain'
import EventDescription from '../EventDescription';

const Stack = createStackNavigator();

function HomeScreen() { 
    return (
        <Stack.Navigator>
               <Stack.Screen name="HomeScreenFilter" component={HomeScreenFilter} options={{ headerShown: false }} />
                <Stack.Screen name="EventDescription" component={EventDescription} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreenMain" component={HomeScreenMain} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
}

export default HomeScreen