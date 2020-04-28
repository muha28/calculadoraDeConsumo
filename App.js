import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import CalculaConsumo from './src/screens/CalculaConsumo';
import ClassificaConsumo from './src/screens/ClassificaConsumo';
import {createStackNavigator} from '@react-navigation/stack';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CalculaConsumo'>
        <Stack.Screen
          name = 'Calculadora de Consumo'
          component = {CalculaConsumo}
          
        />
        <Stack.Screen
          name = 'ClassificaConsumo'
          component = {ClassificaConsumo}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


