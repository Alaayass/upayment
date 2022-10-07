/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddProduct from './screens/AddProduct';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home' component={HomeScreen} />
        <Stack.Screen name='AddProduct' component={AddProduct}  />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}   />
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default App;
