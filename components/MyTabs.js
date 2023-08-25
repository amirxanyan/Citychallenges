import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeSVG from '../assets/svgs/Home.svg';
import LikeSVG from '../assets/svgs/like.svg';
import AddSVG from '../assets/svgs/add.svg';
import CloudSVG from '../assets/svgs/cloud.svg';
import SettingsSVG from '../assets/svgs/setting.svg';

import HomeScreen from './tabBarComponents/HomeScreen';
import FavoriteScreen from './tabBarComponents/FavoriteScreen';
import AddScreen from './tabBarComponents/AddScreen';
import CloudScreen from './tabBarComponents/CloudScreen';
import SettingsScreen from './tabBarComponents/SettingsScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveBackgroundColor: "#005693",
                tabBarActiveBackgroundColor: 'red',
                tabBarStyle: {
                    height: 75,
                    position: "absolute",
                    borderBottomEndRadius: 50
                },

            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeSVG />
                    )

                }}
            />


            <Tab.Screen
                name="Like"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <LikeSVG />
                    )
                }}
            />

            <Tab.Screen
                name="Add"
                component={AddScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AddSVG />
                    )
                }}
            />

            <Tab.Screen
                name="Cloud"
                component={CloudScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <CloudSVG />
                    )
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SettingsSVG />
                    )
                }}
            />

        </Tab.Navigator>
    );
}

export default MyTabs