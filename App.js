import React from 'react';
import { View,  StyleSheet, SafeAreaView, backgroundColor } from 'react-native';
import SignupPage from './screens/Signup';
import LoginPage from './screens/Login';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './Auth_Screens/Feed';
import Profile from './Auth_Screens/NavigationPages/Profile';
import Notifications from './Auth_Screens/NavigationPages/Notifications';
import  Help from './Auth_Screens/NavigationPages/Help';
import About from './Auth_Screens/NavigationPages/About';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer style={styles.Container}>
      <Stack.Navigator initialRouteName='Login '>
        <Stack.Screen name='Login' component={LoginPage} options= {{headerShown:false}}/>
        <Stack.Screen name='Signup' component={SignupPage} options={{headerTitle:"", headerTransparent:true}} />
        <Stack.Screen name='HomePage' component={Feed} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{}}/>
        <Stack.Screen name='Notifications' component={Notifications} options={{}}/>
        <Stack.Screen name='About' component={About} options={{}}/>
        <Stack.Screen name='Help' component={Help} options={{}}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center"
  },
}
)


export default App;






