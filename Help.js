import { Center } from 'native-base';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Help = () => {
    return(
        <SafeAreaView>
            
            <View style={{borderBottomWidth:1}}>
                <Text style={Styles.header1}>Chat Bot</Text>
                <TouchableOpacity><Text style={Styles.button}>How can I help you?</Text></TouchableOpacity>
            </View>    
            
            <View style={Styles.container}>
                <Text style={Styles.header}>Email:</Text>
                <TouchableOpacity><Text style={Styles.content}>customerservicepet2Own@gmail.com</Text></TouchableOpacity>
            </View>
            
            <View style={Styles.container}>    
                <Text style={Styles.header}>Customer Service:</Text>
                <TouchableOpacity><Text style={Styles.content}>Live chat with an agent, Estimated wait time 2-5 min.</Text></TouchableOpacity>
                <TouchableOpacity ><Text style={Styles.content}>24/7 Phone, Estimated wait time 5-10 min.</Text></TouchableOpacity>
                
            </View>
        </SafeAreaView>
           

  )
}

const Styles=StyleSheet.create({
    header:{
        fontSize:30,
        marginBottom:5,
        

    },
    header1:{
        fontSize:30,
        marginTop:10,
        marginBottom:10,
        textAlign:"center",
        
    },
    content:{
        fontSize:17,
        marginBottom:5,
    },
    button:{
        marginBottom:100,
        marginLeft:10,
        marginRight:10,
        fontSize:20,
        textAlign:"center",
        borderColor:'black',
        alignItems:"center",
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRadius:100,
    },
    container:{
        backgroundColor:'#fff',
        borderRadius:8,
        padding:15,
        marginTop:40,
        marginLeft:5,
    }

    
})

export default Help;