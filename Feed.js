import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from './NavigationPages/HomePage';
import SettingsPage from './NavigationPages/SettingsPage';
import ChatPage from './NavigationPages/ChatPage';
import PostPage from './NavigationPages/PostPage'
import ShoppingPage from'./NavigationPages/ShoppingPage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();


function BottomTabNavigator() {
  return (
    
    <Tab.Navigator activeColor ='black'  inactiveColor ='white' barStyle = {{ backgroundColor: 'black' }}>
      
      <Tab.Screen 
      name="Home" 
      component={HomePage} 
      options={{
        tabBarLabel:'', 
        tabBarIcon:({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={30}/>
        ),
      }}
    />
      <Tab.Screen 
      name="Chat" 
      component={ChatPage}
      options={{
        
        tabBarLabel:'',
        tabBarIcon:({color}) =>(
          <MaterialCommunityIcons name='message' color={color} size={30}/>
        ), 
      }}/>
      <Tab.Screen 
      name="Post" 
      component={PostPage}
      options={{
        tabBarLabel:'',
        tabBarIcon:({color}) =>(
          <MaterialCommunityIcons name='plus-box' color={color} size={30}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Shopping" 
      component={ShoppingPage}
      options={{
        tabBarLabel:'',
        tabBarIcon:({color}) =>(
          <MaterialCommunityIcons name='shopping' color={color} size={30}/>
          ),
        }}
      />
      <Tab.Screen 
      name="Settings" 
      component={SettingsPage}
      options={{
        tabBarLabel:"",
        tabBarIcon:({color}) =>(
          <MaterialCommunityIcons name='account-settings-outline' color={color} size={30}/>
        ),
        }}
      />
    </Tab.Navigator>
  );
 }

export default BottomTabNavigator;