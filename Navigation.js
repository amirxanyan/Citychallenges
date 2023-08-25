import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Language from './components/Language';
import LoginType from './components/LoginType';
import MyTabs from './components/MyTabs';
import AddScreen from './components/tabBarComponents/AddScreen';
import SignUpScreen from './components/SignUpScreen';



const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false }}/>

        <Stack.Screen name="AddScreen" component={AddScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="LoginType" component={LoginType} options={{ headerShown: false }} />

        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;