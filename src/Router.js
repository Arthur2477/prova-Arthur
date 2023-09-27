import React from 'react'
import {NavigatorConteiner} from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';

const Stack = createNativeStackNavigator()

export default function Router() {
  return (
    
        <NavigatorConteiner>
        <Stack.Navigator initalRouterName= 'Home'>
        <Stack.Screen name= 'Home' component={Home}/>
        </Stack.Navigator>
        </NavigatorConteiner>
  )
}

