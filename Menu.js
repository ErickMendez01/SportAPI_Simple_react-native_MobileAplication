import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Registro from './Registro';
import Start from './Start';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#020206',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Inicio" component={Start} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
