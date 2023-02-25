import React, { useEffect } from 'react'
import { View, Text, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';
import SavePostScreen from '../videosave/savepost';
import Gallery from '../gallery';
const Stack = createStackNavigator()

export default function Route() {
    

    useEffect(() => {
       
    }, [])

   

    return (
    
            <Stack.Navigator>
                        <Stack.Screen name="home" component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="savePost" component={SavePostScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
                        
            
            </Stack.Navigator>
            
        
    )
}