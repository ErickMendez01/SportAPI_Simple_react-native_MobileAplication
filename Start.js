
import React, { Component } from 'react';
import { View, Text , TextInput, Button, StyleSheet, Backgroundcolor} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';


import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
export default class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1:"",
    };
  }
  
  render() {
    const Tab = createBottomTabNavigator();
    return (
      
    <Tab.Navigator 
      screenOptions={{
       tabBarInactiveTintColor:"white",
        tabBarActiveTintColor:"green",
         tabBarStyle: { backgroundColor: "#020206" },
      }}
      >
        <Tab.Screen  name="home" component={Tab1} options={{
          headerShown:false,  
        tabBarLabel:'Circuitos',  
          tabBarIcon:({stext})=>(  
              <Ionicons name="clipboard-outline" size={30} color="white"/>
          )  
          }} />
        <Tab.Screen name="Tab2" component={Tab2} options={{
          headerShown:false,
          tabBarLabel:'Equipos',  
          tabBarIcon:({stext})=>( 
              <Ionicons name="car-sport-outline" size={30} color="white" />  
          )  
          }}/>
          <Tab.Screen name="Tab3" component={Tab3} options={{
          headerShown:false,
          tabBarLabel:'Pilotos',  
          tabBarIcon:({stext})=>(  
              <Ionicons name="people-outline" color="white" size={30}/>  
          )  
          }}/>
          <Tab.Screen name="Tab4" component={Tab4} options={{
          headerShown:false,
          tabBarLabel:'Competiciones',  
          tabBarIcon:({stext})=>(  
           <Ionicons name="earth-outline" size={30} color="white" />
          )  
          
          }}/>
      </Tab.Navigator>

    );
  }
}

const styles = StyleSheet.create({
});