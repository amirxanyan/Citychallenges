import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {HomeScreen} from './screens/HomeScreen';
import {DoneScreen} from './screens/DoneScreen';
import {FavoriteScreen} from './screens/FavoriteScreen';
import {AddScreen} from './screens/AddScreen';
import {SettingsScreen} from './screens/SetingsScreen';



const Tab = createMaterialBottomTabNavigator();

export default function Screens() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Done" component={DoneScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
