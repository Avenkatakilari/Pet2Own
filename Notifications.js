import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Notifications = () => {
    return(
        <View style={Styles.Container}>
            <Text>Notification Page</Text>
        </View>   

  )
}

const Styles=StyleSheet.create({

    Container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    
})

export default Notifications;